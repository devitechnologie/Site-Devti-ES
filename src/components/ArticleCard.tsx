import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { BlogpostDocument } from "../../prismicio-types"
import { PrismicNextImage } from "@prismicio/next"

type ArticleCardProps = {
  blog: BlogpostDocument
}

const ArticleCard = async ({ blog }: ArticleCardProps): Promise<JSX.Element> => {
  const t = await getTranslations()

  return (
    <div
      className="bg-white rounded-md shadow-md">
      <div className="aspect-video bg-primary-normal-purple rounded-t-md">
        <PrismicNextImage
          field={blog.data.image}
          width={920}
          height={520}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div className="p-5">
        <h3 className="title-h3 hover:underline cursor-pointer line-clamp-2">
          <Link href={`/blog/${blog.uid}`}>
            {blog.data.title}
          </Link>
        </h3>
        <p className="title-p mt-5 line-clamp-2">
          {blog.data.subtitle}
        </p>
        <div className="mt-5">
          <Link
            href={`/blog/${blog.uid}`}
            className="button inline-block"
          >
            {
              t('home.blogSection.readMore')
            }
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard