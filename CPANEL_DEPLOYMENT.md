# cPanel website update

This release completes the staff dashboard and connects packages, articles, fleet, reviews, news, business settings, and website inquiries to Laravel. It is an update package for the existing website, not proof that the live server has been upgraded.

## File Manager installation (your current hosting workflow)

The backend folder is `laravel_app`. No Terminal or SSH is needed for this route.

1. In cPanel, back up/export the MySQL database and download backups of `public_html`, `laravel_app/.env`, and `laravel_app/storage`. Enable **Show Hidden Files** in File Manager.
2. Confirm the domain uses **PHP 8.4 or newer** in cPanel's PHP selector. The project's locked Symfony dependencies require PHP 8.4, even though Laravel's own minimum is lower. If the host does not offer PHP 8.4+, stop and contact the host before replacing files.
3. Open the locally supplied `DEPLOYMENT_KEY.txt` and keep it private. The setup key expires seven days after packaging. Do not upload that text file to `public_html`.
4. Upload the `cpanel-update-*.zip` outside the public web root and extract it into a staging folder. Copy the **contents** of its `laravel_app` directory into the existing `laravel_app` folder. Preserve `.env` and `storage`. Copy the **contents** of its `public_html` directory into the existing `public_html` folder. Preserve existing `images`, `videos`, and any cPanel-generated PHP-handler directives in `.htaccess`.
5. Upload `vendor-production.zip` into `laravel_app` and extract it there, producing `laravel_app/vendor/autoload.php`. It contains the production dependencies so Composer is unnecessary on the server. Keep the ZIP outside `public_html`.
6. Check that the existing `.env` has the real database credentials and original `APP_KEY`, `APP_ENV=production`, `APP_DEBUG=false`, and `APP_URL=https://www.comeagaintoursandtravels.com`. If mail/Telegram are already working, preserve their credentials. Never replace `.env` with the example file.
7. Visit `https://www.comeagaintoursandtravels.com/update-dashboard.php` over HTTPS. Enter the one-time deployment key, your staff name/email, and a new password of at least 12 characters. Confirm that a backup exists, then run the update. Do not close the page while it runs.
8. The setup page runs additive migrations, imports the existing website content once, creates/updates the super administrator, and rebuilds caches. On success, it deletes the private deployment manifest so it cannot be reused. Delete `public_html/update-dashboard.php` in File Manager afterward, plus any old `public_html/setup.php`. Delete the uploaded ZIPs and private key after confirming the backup.
9. Sign in at `/admin/login`. Use **Staff Access** to create consultants/content editors, reset their passwords, or revoke access. Verify the workflows in the checklist below.

The setup page requires HTTPS, a private 256-bit random key, a seven-day expiry, a process lock, and limited failed attempts. It never prints database credentials or stack traces. Without the manifest it returns 404. If setup fails, inspect `laravel_app/storage/logs/laravel.log` using File Manager, fix the configuration, and retry. It will not erase customer tables. Do not re-upload the deployment manifest after a successful installation unless intentionally performing a new, backed-up maintenance operation.

The package retains the existing public photos/videos and uses the existing `laravel_app` path. A fresh server installation also requires the media folders from `frontend/public`.

## Layout and requirements

- PHP **8.4 or newer** with Composer-compatible extensions, MySQL, HTTPS, and Apache/LiteSpeed rewriting.
- `~/public_html/`: built React website; retain its existing `images/` and `videos/` folders.
- `~/public_html/api/index.php`: the supplied Laravel front controller.
- `~/laravel_app/`: Laravel application, dependencies, existing `.env`, and persistent `storage/`.
- The command-line instructions below are an alternative for hosts with Terminal or SSH. File Manager users should follow the installation steps above.

If the existing Laravel directory has another name, update `$laravelPath` in `public_html/api/index.php`. The default package uses a same-origin `/api` path. An existing API subdomain may continue to serve Laravel, but the frontend build must use its exact HTTPS `/api` URL, and the backend CORS configuration must allow the website origin. Avoid redirects between API hostnames because they may strip authorization headers.

## Prepare locally

From `frontend/`, build with the same-origin URL:

```powershell
$env:VITE_API_URL='/api'
npm run build
```

Prepare production Composer dependencies locally in `release/dependencies` (copy `composer.json`, `composer.lock`, `app`, `bootstrap`, `database`, `config`, and `routes` there first), then run:

```powershell
composer install --working-dir=release/dependencies --no-dev --no-scripts --prefer-dist --optimize-autoloader --no-interaction
```

From the repository root:

```powershell
./scripts/package-cpanel.ps1
```

The main ZIP contains `public_html/`, `laravel_app/`, this guide, and a production configuration example. A separate `vendor-production.zip` contains the production PHP dependencies, and a private `DEPLOYMENT_KEY.txt` contains the setup key. The main ZIP intentionally excludes secrets, the local database, existing uploads, server caches/logs, dependencies, and unchanged website photos/videos. Do not upload the ZIP inside the public web root. Extract it in a staging directory and copy each directory's contents into its corresponding server folder. Keep any cPanel-generated PHP-handler directives in the existing `.htaccess` when installing the supplied rewrite rules.

## Back up and deploy

1. Download a full backup of the existing database, `public_html`, Laravel `.env`, and Laravel `storage/`. Keep the backup outside the public web root. Record the currently configured PHP version and API location.
2. Stage the new Laravel files outside `public_html`. Preserve the production `.env`, `APP_KEY`, and the entire existing `storage/` directory. Do not replace production credentials with the example configuration.
3. Use cPanel's PHP selector to confirm PHP 8.4+ for the website and the CLI. Substitute the host's PHP executable if `php -v` points to an older version.
4. In `~/laravel_app`, install production dependencies and create missing writable runtime directories:

```sh
composer install --no-dev --prefer-dist --optimize-autoloader --no-interaction
mkdir -p storage/app/public/media storage/framework/cache/data storage/framework/sessions storage/framework/views storage/logs bootstrap/cache
php artisan optimize:clear
php artisan migrate --force
php artisan db:seed --class=WebsiteContentSeeder --force
```

If this is the first database import of safari packages, run the following only after checking the existing catalog. This seeder skips an already-populated catalog and never deletes existing records:

```sh
php artisan db:seed --class=SafariPackageSeeder --force
```

The website content import runs once and preserves subsequent edits and deletions. It imports the existing seven articles, nine public reviews, four vehicle offerings, and current contact settings. Vehicle rates/capacities were carried over from public advertised ranges; verify them in the dashboard before launch. No sample customers, sample subscribers, or default-password accounts are installed. Do not run the old demonstration seeders on production.

5. Create the administrator. The command securely prompts for a password of at least 12 characters. Run it again to reset a password or change a role; previous tokens for that account are revoked.

```sh
php artisan admin:user your-staff-email@example.com --role=super_admin
```

Additional roles are `safari_consultant` (inquiries, subscribers, fleet) and `content_editor` (packages, blog, reviews, news). Super administrators can manage every section. There is no public registration or demo login. Sessions expire after eight hours and logging out revokes the server token.

6. Check `.env`: `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://www.comeagaintoursandtravels.com`, actual MySQL credentials, SMTP and optional Telegram credentials. Keep the existing `APP_KEY`. Only generate a key for a genuinely new installation; rotating an existing key invalidates signed newsletter links and other encrypted data.
7. Copy the frontend update into `public_html`, including hidden `.htaccess`, the new `assets/` files, and `api/index.php`. Preserve existing photos, videos, uploads, and cPanel PHP configuration. Remove any old public `setup.php`; `/clear` and `/run-setup-migrations` are no longer supported.
8. Rebuild caches:

```sh
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

Uploaded images and videos are served by `/api/media/{filename}`; no storage symlink is required. Set PHP `upload_max_filesize` to at least `52M` and `post_max_size` to at least `56M` to support gallery videos up to 50 MB (images remain limited to 5 MB). Ensure the cPanel account can write Laravel `storage/` and `bootstrap/cache`; do not use world-writable permissions.

The gallery manager is at `/admin/gallery` for content editors and super admins. Deploy `config/gallery.php` with the backend: it preserves the existing 18 photos and 18 videos on first use, without a migration or seeder. Later changes are stored in `managed_content`. Deploy the frontend and backend together and rebuild the Laravel configuration/route caches. Saving publishes immediately; hiding or removing an entry leaves its underlying file intact. Verify add, edit, reorder, hide, and remove on `/gallery`, including video playback and seeking. Direct video URLs must point to playable MP4/WebM files, not YouTube pages.

## Verify before announcing the update

- Open `/api/packages` and `/api/blog`: both must return JSON, not the React HTML page. Open `/admin/login` directly and refresh it.
- A signed-out request to `/api/admin/inquiries` must return **401**. Arbitrary emails and wrong passwords must fail login. Test each staff role's allowed and forbidden sections.
- Submit one clearly labeled test contact, booking request, and trip-planner request. Check their dashboard records, structured fields, and actual office email/Telegram delivery. Success means the inquiry was stored; delivery failures are logged without discarding it.
- Create a draft package/article, confirm it is absent publicly, publish it, refresh the public pages, then edit and delete the test record. Package details must return 404 for drafts.
- Upload an image, reopen its URL, and confirm it survives a new login. Check fleet maintenance visibility, review approval/feature visibility, and news hiding.
- Change a business contact or currency rate, then reload a public page and verify its links/prices. Check the actual office address, advertised vehicle rates and company details.
- Subscribe a test email, check the welcome message and unsubscribe link, and verify that unsubscribe updates the dashboard. Existing inactive subscribers are not silently reactivated by repeated public signups.
- Stop/reject a request in browser developer tools and verify a save error appears without a success message or browser-only fallback. Restore connectivity and retry.
- Check System Health. It tests database/storage and reports configuration; only a real message confirms SMTP/Telegram delivery. The Telegram test sends a real staff-requested alert.

Existing daily AI news fetching requires the Laravel scheduler cron, if you intend to use it:

```sh
* * * * * cd /home/CPANEL_USER/laravel_app && /path/to/php artisan schedule:run >> /dev/null 2>&1
```

Replace both paths with the host's actual paths. AI-fetching credentials remain server-side. Check logs and review generated stories; the public news endpoint no longer repopulates hidden or empty content automatically.

## Rollback

Restore the saved frontend and backend release and retain the database backup. These migrations add tables and a user role; they do not remove existing customer/package data. Avoid `migrate:fresh`, `db:wipe`, or the old destructive seeder. Do not run migration rollback casually: it removes newly created dashboard records. Restore the database backup only when necessary and account for any inquiries received since the backup. If a previously deployed dashboard exposed unprotected APIs, keep the secured backend in place while reverting frontend files.
