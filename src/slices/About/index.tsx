import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */
const About = async ({ slice }: AboutProps): Promise<JSX.Element> => {
  const t = await getTranslations();

  return (
    <section className="app-container section-py flex flex-col-reverse lg:flex-row justify-between items-center gap-4 lg:gap-10">

      <div>
        <div
          className="w-full lg:w-[500px] flex justify-center items-center"
        >
          <Image
            src='/images/server-cloud.png'
            alt="cloud image"
            width={"1200"}
            height={"800"}
            className="w-full"
          />
        </div>
      </div>
      <div
        className="w-[100%] max-w-[560px] flex flex-col justify-center items-start"
      >
        <h6
          className="relative text-3xl font-extrabold font-poppins mb-5 max-md:pt-16 text-primary-normal-purple"
        >
          DEVTI THECHNOLOGIE
        </h6>
        <h1 className="title-h2 text-start">
          {
            slice.primary.title
          }
        </h1>
        {/* line */}
        <div
          className="w-[30%] h-[3px] rounded-full bg-primary-normal-purple mt-5 mb-8"
        />
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p
                className="mt-3 title-p text-start"
              >
                {
                  children
                }
              </p>
            ),
            hyperlink: ({ children, node }) => {
              return (
                <Link
                  href={node.data.url ?? '/'}
                  className="text-primary-normal-purple hover:underline"
                >
                  {children}
                </Link>
              )
            }
          }}
        />
        {/* <p className="mt-8 title-p text-start"
          dangerouslySetInnerHTML={{ __html: t.raw('home.description.p1') }}
        />

        <p
          className="mt-3 title-p text-start"
          dangerouslySetInnerHTML={{ __html: t.raw('home.description.p2') }}
        />

        <p
          className="mt-3 title-p text-start"
          dangerouslySetInnerHTML={
            {
              __html: t.raw('home.description.p3')
            }
          }
        /> */}
      </div>
    </section>
  );
};

export default About;
