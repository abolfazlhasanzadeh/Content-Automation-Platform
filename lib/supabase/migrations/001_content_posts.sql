CREATE TABLE content_post (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT,
  body TEXT[],
  category TEXT NOT NULL,
  category_slug TEXT NOT NULL,
  source TEXT,
  url TEXT,
  display_time TEXT,
  status TEXT NOT NULL DEFAULT 'منتشر شده'
    CHECK (status IN ('فوری', 'در انتظار تأیید', 'منتشر شده')),
  is_lead BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX content_post_category_slug_idx ON content_post (category_slug);
CREATE INDEX content_post_status_idx ON content_post (status);
CREATE INDEX content_post_created_at_idx ON content_post (created_at DESC);

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER content_post_updated_at
  BEFORE UPDATE ON content_post
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
