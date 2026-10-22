<?php

namespace Database\Seeders;

use App\Models\SafariPackage;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;

class SafariPackageSeeder extends Seeder
{
    /**
     * Run the database seeds for all 33 authentic Come Again Safari Packages.
     */
    public function run(): void
    {
        $jsonPath = database_path('seeders/data/safari_packages.json');

        if (!File::exists($jsonPath)) {
            Log::warning("Safari packages json seed file not found at: {$jsonPath}");
            return;
        }

        $jsonContent = File::get($jsonPath);
        $packages = json_decode($jsonContent, true);

        if (!is_array($packages) || empty($packages)) {
            Log::warning("Failed to parse packages from: {$jsonPath}");
            return;
        }

        // Import only on an empty catalog; never overwrite staff edits during deployment.
        if (SafariPackage::exists()) return;

        $count = 0;
        foreach ($packages as $pkgData) {
            SafariPackage::create($pkgData);
            $count++;
        }

        SafariPackage::purgeCache();

        $this->command?->info("Successfully seeded {$count} authentic safari packages from website catalog into MySQL!");
    }
}
