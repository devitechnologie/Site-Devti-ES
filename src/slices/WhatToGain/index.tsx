"use client"

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Props for `WhatToGain`.
 */
export type WhatToGainProps = SliceComponentProps<Content.WhatToGainSlice>;

/**
 * Component for "WhatToGain" Slices.
 */
const WhatToGain = ({ slice }: WhatToGainProps) => {
  const location = usePathname()

  const isOnRealisationPage = location.includes('realisation')

  return (
    <section className="app-container section-py">
      <div>
        <h2 className="title-h2 text-center">
          <Link
            href={isOnRealisationPage ? '#' : '/methode_travaille'}
          >
            {
              slice.primary.title
            }
          </Link>
        </h2>
        <div className="mt-5 max-w-[750px] mx-auto">
          <PrismicRichText
            field={slice.primary.subtitle}
            components={{
              paragraph: ({ children }) => (
                <p
                  className="title-p text-center"
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
        </div>

      </div>
      <div className="flex items-center justify-center gap-16 mt-16 flex-col md:flex-row">
        {
          slice.primary.items.map((item, index) => (
            <div className="flex flex-col items-center justify-center gap-4" key={index}>
              <span
                className="relative flex items-center justify-center font-semibold w-24 h-24 text-3xl text-primary-normal-purple bg-primary-dark-gray-100 rounded-full"
              >
                {
                  item.order
                }
              </span>
              <h3 className="title-h3 text-primary-dark-purple text-center">
                {
                  item.title
                }
              </h3>
              {/* <p className="title-p text-center max-w-[250px] text-gray-500">
              {
                t('home.methodOfWorking.etape1.description')
              }
            </p> */}
              <PrismicRichText
                field={item.description}
                components={{
                  paragraph: ({ children }) => (
                    <p
                      className="title-p text-center max-w-[250px] text-gray-500"
                    >
                      {
                        children
                      }
                    </p>
                  )
                }}
              />
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default WhatToGain;
