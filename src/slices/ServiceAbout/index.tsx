import { cn } from "@/utils/cn";
import { ImageField, LinkField } from "@prismicio/client";
import { Content, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6, RiNumber7, RiNumber8, RiNumber9 } from "react-icons/ri";

const listNumberIcon: JSX.Element[] = [
  <RiNumber1 key='1' />,
  <RiNumber2 key='2' />,
  <RiNumber3 key='3' />,
  <RiNumber4 key='4' />,
  <RiNumber5 key='5' />,
  <RiNumber6 key='6' />,
  <RiNumber7 key='7' />,
  <RiNumber8 key='8' />,
  <RiNumber9 key='9' />,
]

/**
 * Props for `ServiceAbout`.
 */
export type ServiceAboutProps = SliceComponentProps<Content.ServiceAboutSlice>;

/**
 * Component for "ServiceAbout" Slices.
 */
const ServiceAbout = async ({ slice }: ServiceAboutProps): Promise<JSX.Element> => {

  if (slice.variation === 'withBullets') {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <ServiceWhyThisServiceSection
          reverseMobile={slice.primary.reverse_on_mobile ?? false}
          title={slice.primary.title}
          titleHeading={slice.primary.title_heading}
          description={slice.primary.description}
          pic={slice.primary.image}
          listPoints={[
            ...slice.primary.bullet_points.map((point, index) => (
              {
                icon: listNumberIcon[index],
                title: point.bullet_point,
                description: point.bullet_description
              }
            ))
          ]}
        />
      </section>
    )
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServiceAdvantagesSection
        title={slice.primary.title}
        titleHeading={slice.primary.title_heading}
        subtitle={slice.primary.badge_text}
        description={slice.primary.description}
        pic={slice.primary.image}
        btnText={slice.primary.button_text}
        btnLink={slice.primary.button_link}
        reverse={slice.variation === 'reverse'}
      />
    </section>
  )
}

type ServiceWhyThisServiceSectionProps = {
  title: KeyTextField
  description: RichTextField
  pic: ImageField
  listPoints: PointType[]
  titleHeading?: 'h1' | 'h2'
  reverseMobile?: boolean
}

export type PointType = {
  icon: JSX.Element
  title: KeyTextField
  description: KeyTextField
}

const ServiceWhyThisServiceSection = ({ title, description, pic, listPoints, titleHeading, reverseMobile }: ServiceWhyThisServiceSectionProps) => {
  const Component = titleHeading === 'h1' ? 'h1' : 'h2'

  return (
    <section>
      <div className="app-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className={cn(
            "flex justify-center items-center", (reverseMobile && 'max-md:order-2')
          )}>
            <PrismicNextImage
              field={pic}
              width={800}
              height={500}
              className='w-full max-w-[500px] object-cover'
            />
          </div>
          <div className={cn(
            "flex flex-col justify-center items-start",
            reverseMobile && 'max-md:order-1'
          )}>
            {
              (title && title.trim().length > 0) && (
                <Component className="title-h2 mb-4 text-start">
                  {title}
                </Component>
              )
            }
            {/* <p className="mt-4 title-p">
              {description}
            </p> */}
            {
              (description && description.length > 0) && (
                <PrismicRichText
                  field={description}
                  components={{
                    paragraph: ({ children }) => <p className="mb-4 title-p-lg">{children}</p>,
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
              )
            }
            {/* advantages */}
            <div
              className="mt-4 flex flex-col gap-4 items-start md:items-start w-full"
            >
              {
                // max 5 points
                listPoints.slice(0, 5).map((point, index) => (
                  <div
                    key={index}
                  >
                    <div
                      className={
                        cn(
                          'flex items-start gap-4 title-p',
                          // if no description then center the icon
                          (!point.description || point.description.trim().length === 0) && 'items-center'
                        )
                      }
                    >
                      <div
                        className="text-white bg-primary-normal-purple text-2xl p-2 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
                      >
                        {point.icon}
                      </div>
                      <div>
                        <h3
                          className="text-primary-normal-purple font-bold text-lg"
                        >
                          {point.title}
                        </h3>
                        <p
                          className="title-p"
                        >
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))

              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

type ServiceAdvantagesSectionProps = {
  title: KeyTextField
  subtitle: KeyTextField
  description: RichTextField
  pic: ImageField
  btnText: KeyTextField
  btnLink: LinkField
  reverse: boolean
  titleHeading?: 'h1' | 'h2'
}

const ServiceAdvantagesSection = async ({ title, subtitle, description, btnLink, btnText, pic, reverse, titleHeading }: ServiceAdvantagesSectionProps) => {
  const Component = titleHeading === 'h1' ? 'h1' : 'h2'

  return (
    <div>
      <div className="app-container section-py">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className={cn(
              'flex flex-col justify-center items-start md:items-start',
              {
                'md:order-2': reverse,
              }
            )}
          >
            <h6
              className="text-primary-normal-purple text-base border border-primary-normal-purple px-3 py-1 rounded-full w-fit font-normal font-raleway "
            >
              {subtitle}
            </h6>
            <Component className="title-h2 mt-4 text-start">
              {title}
            </Component>
            <div
              className="mt-4 title-p flex flex-col gap-2"
            // dangerouslySetInnerHTML={{ __html: description }}
            >
              <PrismicRichText
                field={description}
                components={{
                  paragraph: ({ children }) => <p className="title-p-lg">{children}</p>,
                  hyperlink: ({ children, node }) => {
                    return (
                      <Link
                        href={node.data.url ?? '/'}
                        className="text-primary-normal-purple hover:underline"
                      >
                        {children}
                      </Link>
                    )
                  },
                  oList: ({ children }) => <ol className="flex flex-col gap-3 list-bullet">{children}</ol>,
                  list: ({ children }) => <ul className="flex flex-col gap-3 list-bullet">{children}</ul>,
                  listItem: ({ children }) => <li className="title-p-lg">{children}</li>,
                  oListItem: ({ children }) => <li className="title-p-lg">{children}</li>,
                  strong: ({ children }) => <strong className="font-bold text-primary-normal-purple">{children}</strong>,
                }}
              />
            </div>
            {
              (btnLink.link_type != "Any" && (btnText && btnText.trim().length > 0)) && (
                <div>
                  <PrismicNextLink
                    field={btnLink}
                    className="block button mt-4"
                  >
                    {
                      btnText
                    }
                  </PrismicNextLink>
                </div>
              )
            }
          </div>
          <div className="flex justify-center items-center">
            <PrismicNextImage
              field={pic}
              width={800}
              height={800}
              className='w-full max-w-[500px] object-cover rounded-xl overflow-hidden'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceAbout;
