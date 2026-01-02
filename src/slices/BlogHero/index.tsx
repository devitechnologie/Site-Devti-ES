import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

const AppLogo = '/images/Logo DEVTI TECHNOLOGIE-06.png'

/**
 * Props for `BlogHero`.
 */
export type BlogHeroProps = SliceComponentProps<Content.BlogHeroSlice>;

/**
 * Component for "BlogHero" Slices.
 */
const BlogHero = async ({ slice }: BlogHeroProps): Promise<JSX.Element> => {
  const t = await getTranslations()

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="app-container">
      <div className="flex items-center justify-center gap-12 bg-gray-100 p-5 rounded-sm relative flex-1">
        <div>
          <div className='w-20 h-20 shadow-xl rounded-full overflow-hidden bg-white flex justify-center items-center'>
            <Image
              src={AppLogo}
              width={250}
              height={250}
              alt="DevTi Technology"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='font-bold'>
            {t('blog.blogHero.title')}
          </span>
          <div className='flex flex-row items-center mt-2 text-base'>
            <Link
              href ={'/contact'}
              className='mr-2 text-primary-normal-purple'
            >
              {t('blog.blogHero.link')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
