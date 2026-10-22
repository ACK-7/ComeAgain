<?php

namespace App\Services;

class BlogArticleData
{
    private static function orderedList(mixed $value): array
    {
        if (!is_array($value)) return [];
        // Preserve editorial order even if validation placed an optional field last.
        $value = array_filter($value, fn ($key) => ctype_digit((string) $key), ARRAY_FILTER_USE_KEY);
        ksort($value, SORT_NUMERIC);
        return array_values($value);
    }

    public static function normalize(array $article): array
    {
        $article['sections'] = array_map(function (array $section) {
            $section['paragraphs'] = self::orderedList($section['paragraphs'] ?? []);
            if (isset($section['tips'])) $section['tips'] = self::orderedList($section['tips']);
            return $section;
        }, self::orderedList($article['sections'] ?? []));
        $article['tags'] = self::orderedList($article['tags'] ?? []);
        if (isset($article['faqs'])) $article['faqs'] = self::orderedList($article['faqs']);
        if (isset($article['linkedPackage']['highlights'])) $article['linkedPackage']['highlights'] = self::orderedList($article['linkedPackage']['highlights']);
        return $article;
    }

    public static function publicationTimestamp(array $article): int
    {
        return strtotime($article['publishedDate'] ?? '') ?: 0;
    }
}
