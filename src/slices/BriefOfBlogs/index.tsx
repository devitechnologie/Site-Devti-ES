import ArticleCard from "@/components/ArticleCard";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

/**
 * Props for `BriefOfBlogs`.
 */
export type BriefOfBlogsProps = SliceComponentProps<Content.BriefOfBlogsSlice, { lang?: string }>;

/**
 * Component for "BriefOfBlogs" Slices.
 */
const BriefOfBlogs = async ({ slice,context }: BriefOfBlogsProps): Promise<JSX.Element> => {
  const t = await getTranslations()
  const client = createClient();

  const dataList = await Promise.all(
    slice.primary.blogs.map((item) => {
      if (isFilled.contentRelationship(item.blog)) {
        return client.getByID(item.blog.id, { lang: context.lang });
      }
    })
  );

  return (
    <section className="app-container section-py">
      <div
        className="flex flex-col items-center"
      >
        <h2 className="title-h1 text-center sm:text-start">
          {
            t('home.blogSection.title')
          }
        </h2>
        <Link
          href="/blog"
          className="px-4 py-2 rounded-md inline-block hover:bg-primary-normal-purple text-primary-normal-purple hover:text-white transition-all duration-300 bg-primary-light-blue border font-semibold shadow-md border-primary-normal-purple mt-5"
        >
          {
            t('home.blogSection.button')
          }
        </Link>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {
            dataList.map((blog, index) => {
              if (blog && blog.type === 'blogpost') {
                return (
                  <ArticleCard
                    key={index}
                    blog={blog}
                  />
                );
              }
            })
          }
        </div>
      </div>
    </section>
  );
};

export default BriefOfBlogs;
