import NewsCarousel from "@/components/core/NewsCarousel/NewsCarousel";
import CategoryNav from "@/components/core/CategoryNav/CategoryNav";
import { Stagger, Item } from "@/components/core/motion/StaggerGroup";
import { getAllArticles, getCategoryCounts, categories } from "@/lib/articles";

export const revalidate = 1800; 

export default async function Home() {
  const articles = await getAllArticles();
  const counts = await getCategoryCounts();

  return (
    <div className="mx-auto w-full max-w-6xl flex-1 p-4 sm:p-6">
      <Stagger>

        <Item>
          <section className="mt-10">
            <h2 className="mb-4 flex items-center gap-2 text-lg font-extrabold tracking-tight">
              <span aria-hidden className="size-1.5 rounded-[1px] bg-primary" />
              اخبار منتخب
            </h2>
            <NewsCarousel articles={articles} />
          </section>
        </Item>

        <Item>
          <CategoryNav categories={categories} counts={counts} />
        </Item>
      </Stagger>
    </div>
  );
}
