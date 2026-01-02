"use client"

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import ImageFocuser from "./components/ImageFocuser";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-scroll";
import NextLink from "next/link";

/**
 * Props for `OurSectors`.
 */
export type OurSectorsProps = SliceComponentProps<Content.OurSectorsSlice>;

/**
 * Component for "OurSectors" Slices.
 */
const OurSectors = ({ slice }: OurSectorsProps): JSX.Element => {
  return (
    <section
      id="our-sectors"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="app-container section-py"
    >
      <div
        className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-5 min-h-[400px]"
      >
        <div
          className="lg:col-span-2"
        >
          <div
            className="w-[100%] max-w-[560px]"
          >
            <Fade
              direction="up"
              triggerOnce
              delay={200}
            >
              <h2 className="title-h2">
                {
                  slice.primary.title
                }
              </h2>
            </Fade>
            <Fade
              direction="up"
              triggerOnce
              delay={400}
            >
              <div className="mt-8">
                <PrismicRichText
                  field={slice.primary.description}
                  components={{
                    paragraph: ({ children }) => (
                      <p
                        className="title-p mt-3"
                      >
                        {
                          children
                        }
                      </p>
                    ),
                    hyperlink: ({ children, node }) => {
                      if (node.data.url?.includes("#")) {
                        return (
                          <Link
                            to={node.data.url?.replace("#", "")}
                            href={node.data.url}
                            spy={true}
                            smooth={true}
                            offset={-25}
                            duration={500}
                            className="text-primary-normal-purple hover:underline"
                          >
                            {children}
                          </Link>
                        )
                      }
                      return (
                        <NextLink
                          href={node.data.url ?? '/'}
                          className="text-primary-normal-purple hover:underline"
                        >
                          {children}
                        </NextLink>
                      )
                    }
                  }}
                />
              </div>
            </Fade>
          </div>
        </div>
        <div
          className="lg:col-span-3 lg:pl-12"
        >
          <div className="rounded-xl overflow-hidden h-full w-full">
            <ImageFocuser
              slides={slice.primary.sectors}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSectors;
