import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

/**
 * Props for `ImageWithTextColAndLink`.
 */
export type ImageWithTextColAndLinkProps =
  SliceComponentProps<Content.ImageWithTextColAndLinkSlice>;

/**
 * Component for "ImageWithTextColAndLink" Slices.
 */
const ImageWithTextColAndLink = ({
  slice,
}: ImageWithTextColAndLinkProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div
        className="min-h-screen pt-[90px]"
      >
        <div
          className="flex flex-col items-center justify-center"
        >
          <PrismicNextImage
            field={slice.primary.image}
            width={600}
            height={600}
            className="w-72"
          />
          <h1
            className="text-3xl font-bold leading-tight text-primary-dark-purple my-4"
          >
            {slice.primary.title}
          </h1>
          <p
            className="text-lg mt-4"
          >
            {slice.primary.description}
          </p>
        </div>
        <div
          className="flex flex-col items-center mt-10"
        >
          <PrismicNextLink
            field={slice.primary.link}
            className='px-4 py-2 button inline-block'
          >
            {slice.primary.link_text}
          </PrismicNextLink>
        </div>
      </div>
    </section>
  );
};

export default ImageWithTextColAndLink;
