import { KeyTextField, RichTextField } from "@prismicio/client"
import { PrismicRichText } from "@prismicio/react"

type FeatureCardProps = {
  data: FeatureCardData
}

export type FeatureCardData = {
  title: KeyTextField
  description: RichTextField
  icon?: JSX.Element
}

const FeatureCard = ({ data: { title, description, icon } }: FeatureCardProps) => {
  return (
    <div
      className="group shadow-card-shadow-border cursor-default rounded-lg p-6 bg-white hover:bg-primary-dark-purple transition duration-300 ease-in-out"
    >
      {
        icon && (
          <div
            className="text-7xl text-primary-normal-purple group-hover:text-white transition duration-300 ease-in-out"
          >
            {icon}
          </div>
        )
      }
      <h3
        className="title-h3 mt-4 text-primary-normal-purple group-hover:text-white transition duration-300 ease-in-out"
      >
        {title}
      </h3>
      {/* <p
        className="title-p mt-4 group-hover:text-white transition duration-300 ease-in-out"
      >
        {description}
      </p> */}
      <div id="advantages-cards">
        <PrismicRichText
          field={description}
          components={{
            strong: ({ children }) => <strong className="font-bold text-primary-normal-purple group-hover:text-white transition duration-300 ease-in-out">{children}</strong>,
            paragraph: ({ children }) => <p className="title-p mt-4 group-hover:text-white transition duration-300 ease-in-out">{children}</p>,
            list: ({ children }) => <ul className="mt-4 prose prose-ol:px-3 group-hover:text-white transition duration-300 ease-in-out prose-ul:px-3 list-disc prose-li:marker:text-transparent">{children}</ul>,
            oList: ({ children }) => <ol className="mt-4 prose prose-ol:px-3 group-hover:text-white transition duration-300 ease-in-out prose-ul:px-3 list-decimal prose-li:marker:text-transparent">{children}</ol>,
          }}
        />
      </div>
    </div>
  )
}

export default FeatureCard