import ArticleCard from "@/components/ArticleCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `BlogsList`.
 */
export type BlogsListProps = SliceComponentProps<Content.BlogsListSlice, { lang?: string }>;

/**
 * Component for "BlogsList" Slices.
 */
const BlogsList = async ({ slice, context }: BlogsListProps): Promise<JSX.Element> => {
  const client = createClient()
  const blogList = await client.getAllByType('blogpost', {
    lang: context.lang,
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    }
  })

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="app-container section-py grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {
        blogList.map((blog, index) => {
          return (
            <ArticleCard
              key={index}
              blog={blog}
            />
          );
        })
      }
    </section>
  );
};

export default BlogsList;
