CREATE OR REPLACE VIEW category_counts AS
SELECT category_slug, count(*) AS count
FROM content_post
WHERE status IN ('منتشر شده', 'فوری')
GROUP BY category_slug;
