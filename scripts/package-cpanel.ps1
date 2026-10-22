param([string]$OutputDirectory = "release")
$ErrorActionPreference = 'Stop'
$workspacePath = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$outputPath = [System.IO.Path]::GetFullPath((Join-Path $workspacePath $OutputDirectory))
if (-not $outputPath.StartsWith($workspacePath + [System.IO.Path]::DirectorySeparatorChar, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw 'Output directory must be inside this workspace.'
}
if (-not (Test-Path -LiteralPath (Join-Path $workspacePath 'frontend/dist/index.html'))) { throw 'Run the frontend production build first.' }
New-Item -ItemType Directory -Path $outputPath -Force | Out-Null
if (Test-Path -LiteralPath (Join-Path $outputPath 'vendor-production.zip')) { throw 'Choose a fresh output directory; this release was already packaged.' }
Add-Type -AssemblyName System.IO.Compression.FileSystem
$productionVendor = Join-Path $workspacePath 'release/dependencies/vendor'
if (-not (Test-Path -LiteralPath (Join-Path $productionVendor 'autoload.php'))) { throw 'Prepare release/dependencies/vendor with Composer first. See CPANEL_DEPLOYMENT.md.' }
$keyBytes = New-Object byte[] 32
$generator = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$generator.GetBytes($keyBytes)
$generator.Dispose()
$deploymentKey = [Convert]::ToBase64String($keyBytes)
$hasher = [System.Security.Cryptography.SHA256]::Create()
$keyHash = ([BitConverter]::ToString($hasher.ComputeHash([Text.Encoding]::UTF8.GetBytes($deploymentKey)))).Replace('-', '').ToLowerInvariant()
$hasher.Dispose()
$manifestPath = Join-Path $outputPath 'deployment-manifest.json'
@{ key_hash = $keyHash; expires_at = [DateTimeOffset]::UtcNow.AddDays(7).ToUnixTimeSeconds() } | ConvertTo-Json | Set-Content -LiteralPath $manifestPath -Encoding ascii
$keyPath = Join-Path $outputPath 'DEPLOYMENT_KEY.txt'
Set-Content -LiteralPath $keyPath -Value ("One-time setup key (expires in seven days):`r`n" + $deploymentKey + "`r`nKeep this file private. Never upload it to public_html. Delete it after installation.") -Encoding ascii
$archivePath = Join-Path $outputPath ('cpanel-update-' + (Get-Date -Format 'yyyyMMdd-HHmmss') + '.zip')
$archive = [System.IO.Compression.ZipFile]::Open($archivePath, [System.IO.Compression.ZipArchiveMode]::Create)
try {
    $frontendRoot = Join-Path $workspacePath 'frontend/dist'
    foreach ($file in Get-ChildItem -LiteralPath $frontendRoot -Recurse -File -Force) {
        $relative = $file.FullName.Substring($frontendRoot.Length + 1).Replace('\', '/')
        # Existing media stays on cPanel; upload media separately for a fresh installation.
        if ($relative -match '^(images|videos)/') { continue }
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $file.FullName, 'public_html/' + $relative) | Out-Null
    }
    $backendRoot = Join-Path $workspacePath 'backend'
    foreach ($file in Get-ChildItem -LiteralPath $backendRoot -Recurse -File -Force) {
        $relative = $file.FullName.Substring($backendRoot.Length + 1).Replace('\', '/')
        if ($relative -match '^(vendor|node_modules|storage|tests|\.git)/' -or $relative -match '^bootstrap/cache/' -or $relative -match '^\.env($|\.)' -or $relative -match '\.(sqlite|log)$' -or $relative -match '^\.phpunit') { continue }
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $file.FullName, 'laravel_app/' + $relative) | Out-Null
    }
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, (Join-Path $workspacePath 'deployment/api/index.php'), 'public_html/api/index.php') | Out-Null
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $manifestPath, 'laravel_app/.deployment.json') | Out-Null
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, (Join-Path $workspacePath 'deployment/update-dashboard.php'), 'public_html/update-dashboard.php') | Out-Null
    foreach ($name in @('CPANEL_DEPLOYMENT.md', 'deployment/production.env.example')) {
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, (Join-Path $workspacePath $name), $name.Replace('\', '/')) | Out-Null
    }
} finally { $archive.Dispose() }
Write-Output $archivePath

$vendorArchivePath = Join-Path $outputPath 'vendor-production.zip'
if (Test-Path -LiteralPath $vendorArchivePath) { throw 'vendor-production.zip already exists. Choose a fresh release folder for another package.' }
$vendorArchive = [System.IO.Compression.ZipFile]::Open($vendorArchivePath, [System.IO.Compression.ZipArchiveMode]::Create)
try {
    foreach ($file in Get-ChildItem -LiteralPath $productionVendor -Recurse -File -Force) {
        $relative = $file.FullName.Substring($productionVendor.Length + 1).Replace('\', '/')
        [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($vendorArchive, $file.FullName, 'vendor/' + $relative) | Out-Null
    }
} finally { $vendorArchive.Dispose() }
Write-Output $vendorArchivePath
Write-Output ('Private deployment key saved in ' + $keyPath)
