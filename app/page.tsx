import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Masthead from "@/components/core/header/Masthead";
import ArticleCard from "@/components/core/ArticleCard/ArticleCard";
import CategoryNav from "@/components/core/CategoryNav/CategoryNav";
import { Stagger, Item } from "@/components/core/motion/StaggerGroup";
import { getAllArticles, getCategoryCounts, categories } from "@/lib/articles";

export const revalidate = 1800; 

const faCount = (value: number) => value.toLocaleString("fa-IR");

export default async function Home() {
  const articles = await getAllArticles();
  const counts = await getCategoryCounts();

  const lead = articles.find((a) => a.lead) ?? articles[0];
  const feed = lead
    ? articles.filter((a) => a.slug !== lead.slug).slice(0, 9)
    : articles.slice(0, 9);
  const uniqueSources = new Set(
    articles.map((a) => a.source?.trim()).filter(Boolean)
  ).size;
  const today = new Intl.DateTimeFormat("fa-IR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 py-6 sm:px-6 sm:py-8">
      <Stagger>
        <Item>
          <Masthead date={today} total={faCount(articles.length)} />
        </Item>

        {lead && (
          <Item>
            <section className="pt-8 sm:pt-10">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <Link
                  href={`/category/${lead.categorySlug}`}
                  className="flex items-center gap-1.5 font-bold text-muted-foreground transition-colors hover:text-primary"
                >
                  <span aria-hidden className="size-1.5 rounded-[1px] bg-primary" />
                  {lead.category}
                </Link>
                <span aria-hidden className="text-muted-foreground/40">
                  &#183;
                </span>
                <span className="tabular-nums text-muted-foreground/80">
                  {lead.time}
                </span>
                <span aria-hidden className="text-muted-foreground/40">
                  &#183;
                </span>
                <span className="font-mono text-muted-foreground/80">
                  {lead.source}
                </span>
              </div>

              <h1 className="mt-4 text-balance text-[1.9rem] leading-[1.3] font-extrabold tracking-tight sm:text-4xl sm:leading-[1.25] lg:text-[2.75rem] lg:leading-[1.2]">
                {lead.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
                {lead.excerpt}
              </p>

              <Link
                href={`/content/${lead.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary underline-offset-4 transition-opacity hover:opacity-80"
              >
                مطالعهٔ کامل
                <ArrowLeft className="size-4" />
              </Link>
            </section>
          </Item>
        )}

        <Item>
          <section className="mt-10 sm:mt-12">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold tracking-tight">
              <span aria-hidden className="size-1.5 rounded-[1px] bg-primary" />
              تازه‌ترین مطالب
              <span className="text-[11px] font-bold text-muted-foreground">
                {faCount(feed.length)} مطلب
              </span>
            </h2>
            <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.1}>
              {feed.map((article) => (
                <Item key={article.slug} hover>
                  <ArticleCard
                    category={article.category}
                    title={article.title}
                    excerpt={article.excerpt}
                    source={article.source}
                    time={article.time}
                    href={`/content/${article.slug}`}
                    className="min-h-56"
                  />
                </Item>
              ))}
            </Stagger>
          </section>
        </Item>

        <Item>
          <section className="mt-10 sm:mt-12">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold tracking-tight">
              <span aria-hidden className="size-1.5 rounded-[1px] bg-primary" />
              موضوع‌ها
              <span className="text-[11px] font-bold text-muted-foreground">
                {faCount(categories.length)} بخش
              </span>
            </h2>
            <CategoryNav categories={categories} counts={counts} />
          </section>
        </Item>

        <Item>
          <footer className="mt-10 flex flex-col gap-3 border-t border-border pt-6 pb-2 sm:mt-12 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-lg font-extrabold tracking-tight sm:text-xl">
              مطالب مهم‌تر، در یک جا.
            </p>
            <p className="max-w-sm text-xs leading-6 text-muted-foreground sm:text-end">
              از میان ده‌ها منبع معتبر فناوری، مطالبِ مهم شناسایی، به فارسی
              ترجمه و با بازبینی انسانی منتشر می‌شوند.
            </p>
          </footer>
        </Item>
      </Stagger>
    </div>
  );
}