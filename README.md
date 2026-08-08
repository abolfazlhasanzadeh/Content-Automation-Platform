const sources = {
  "javascript": [
    "https://v8.dev/blog.atom",
    "https://2ality.com/feeds/posts.atom",
    "https://developer.mozilla.org/en-US/blog/rss.xml",
    "https://nolanlawson.com/feed.xml",
    "https://jakearchibald.com/posts.rss",
    "https://mathiasbynens.be/notes.xml"
  ],
  "frontend": [
    "https://css-tricks.com/feed/",
    "https://www.smashingmagazine.com/feed/",
    "https://web.dev/feed.xml",
    "https://www.joshwcomeau.com/rss.xml",
    "https://ishadeed.com/feed.xml",
    "https://piccalil.li/feed.xml",
    "https://bram.us/feed/"
  ],
  "react": [
    "https://react.dev/rss.xml",
    "https://overreacted.io/rss.xml",
    "https://tkdodo.eu/blog/rss.xml",
    "https://kentcdodds.com/blog/rss.xml",
    "https://www.robinwieruch.de/rss.xml"
  ],
  "laravel": [
    "https://laravel-news.com/feed",
    "https://laravel.com/blog/feed",
    "https://freek.dev/feed",
    "https://themsaid.com/rss"
  ],
  "php": [
    "https://php.watch/feed.rss",
    "https://stitcher.io/rss",
    "https://phpinternals.news/feed"
  ],
  "node": [
    "https://nodejs.org/en/feed/blog.xml",
    "https://bun.com/blog/rss.xml",
    "https://deno.com/blog/feed.xml",
    "https://nodesource.com/blog/feed"
  ],
  "soft-skills": [
    "https://martinfowler.com/feed.atom",
    "https://newsletter.pragmaticengineer.com/feed",
    "https://lethain.com/index.xml",
    "https://www.geoffreylitt.com/feed.xml"
  ],
  "python": [
    "https://realpython.com/atom.xml",
    "https://blog.python.org/feeds/posts/default",
    "https://treyhunner.com/blog/feed/",
    "https://pythonspeed.com/atom.xml"
  ],
  "infrastructure": [
    "https://netflixtechblog.com/feed",
    "https://engineering.fb.com/feed/",
    "https://blog.cloudflare.com/rss/",
    "https://aws.amazon.com/blogs/architecture/feed/",
    "https://brooker.co.za/blog/feed.xml"
  ],
  "devops": [
    "https://www.hashicorp.com/blog/feed.xml",
    "https://charity.wtf/rss",
    "https://www.datadoghq.com/blog/feed/"
  ],
  "database": [
    "https://www.percona.com/blog/feed/",
    "https://planetscale.com/blog/rss.xml",
    "https://www.cockroachlabs.com/blog/feed/"
  ],
  "security": [
    "https://krebsonsecurity.com/feed/",
    "https://feeds.feedburner.com/TheHackersNews",
    "https://www.bleepingcomputer.com/feed/",
    "https://googleprojectzero.blogspot.com/feeds/posts/default",
    "https://www.troyhunt.com/rss/",
    "https://blog.yossarian.net/rss.xml"
  ],
  "ai": [
    "https://www.anthropic.com/news/rss.xml",
    "https://openai.com/blog/rss.xml",
    "https://deepmind.google/blog/rss.xml",
    "https://pytorch.org/blog/feed.xml",
    "https://simonwillison.net/atom/everything/",
    "https://www.interconnects.ai/feed",
    "https://www.philschmid.de/rss"
  ],
  "rust": [
    "https://blog.rust-lang.org/feed.xml",
    "https://this-week-in-rust.org/rss.xml",
    "https://fasterthanli.me/index.xml",
    "https://matklad.github.io/feed.xml"
  ]
};

const items = [];
for (const [category, urls] of Object.entries(sources)) {
  for (const url of urls) {
    items.push({ json: { url, category_hint: category } });
  }
}
return items;