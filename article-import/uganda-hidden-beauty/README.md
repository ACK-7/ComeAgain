# Add the Uganda Hidden Beauty article

This is the supplied article, preserved in ten sections, with SEO fields, company authorship, and the existing Murchison Falls cover photo. It is prepared as a **draft**, because publication was not specified. Nothing has been added to the live website yet.

## cPanel without Terminal

1. Back up/export the existing website database in cPanel phpMyAdmin.
2. Open **phpMyAdmin** and select the live Laravel database named in the existing `laravel_app/.env` (`DB_DATABASE`). Do not share the credentials.
3. Choose **Import**, select `add-article-draft.sql`, and run it. It adds one blog record only. If this slug already exists, it adds nothing and leaves that record untouched.
4. Sign in to the website dashboard, open **Safari Blog & Guides**, and edit **Discover the Hidden Beauty of Uganda: 7 Unforgettable Places to Visit in 2026–2027**.
5. Review the text, author logo, and Murchison Falls cover image. Update the publication date if publishing later. Choose **Published** and save when ready.

The future public path is `/blog/discover-hidden-beauty-uganda-7-places-2026-2027`. It will not appear in public listings while its status is Draft. The existing cover and author images are `/images/Murchison.webp` and `/images/logo.webp`.

If you prefer to avoid database imports, use `article.md` to copy the article into a new dashboard post. `article.json` contains all fields in the format accepted by the current blog API; the current dashboard does not have a JSON import button.

## Seeder alternative

For a host with Terminal/SSH, upload these two files to matching locations inside the existing `laravel_app`:

- `backend/database/seeders/UgandaHiddenBeautyArticleSeeder.php` → `laravel_app/database/seeders/UgandaHiddenBeautyArticleSeeder.php`
- `backend/database/seeders/data/uganda_hidden_beauty_2026_2027.json` → `laravel_app/database/seeders/data/uganda_hidden_beauty_2026_2027.json`

Then, from `laravel_app`, run:

```sh
php artisan db:seed --class=UgandaHiddenBeautyArticleSeeder --force
```

Do not rerun the website installer or re-upload the full dashboard release to add this article. Neither import method changes existing posts or publishes automatically. Leave `DatabaseSeeder` and the one-time website import seeder unchanged.
