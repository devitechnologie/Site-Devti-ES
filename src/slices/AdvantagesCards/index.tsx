import FeatureCard, { FeatureCardData } from "@/components/FeatureCard";
import { Content, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { FaCog, FaCogs, FaCommentSlash, FaCubes, FaGlobeEurope, FaMoneyBillAlt, FaPuzzlePiece, FaSadCry } from "react-icons/fa"
import { CiFaceFrown, CiFaceSmile, CiMobile2 } from "react-icons/ci"
import { BsBullseye, BsDatabase, BsDeviceHdd } from "react-icons/bs"
import { IoAnalyticsOutline, IoBugOutline, IoShieldHalf, IoTimerOutline } from "react-icons/io5";
import { RiScalesLine, RiSearch2Line, RiToolsLine } from "react-icons/ri";
import { TbChartPie } from "react-icons/tb";
import { LiaClipboardListSolid, LiaNetworkWiredSolid, LiaSeedlingSolid } from "react-icons/lia";
import { GoRocket } from "react-icons/go";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { cn } from "@/utils/cn";
import { PiHeartbeat } from "react-icons/pi";
import { LuCalendarCheck, LuServerCog } from "react-icons/lu";
import { MdCloudQueue, MdOutlineWifi } from "react-icons/md";

const IconsData = {
  'Puzzle': <FaPuzzlePiece />,
  'Cubes': <FaCubes />,
  'Face': <CiFaceFrown />,
  'Target': <BsBullseye />,
  'Timer': <IoTimerOutline />,
  'Scales': <RiScalesLine />,
  'Rouages': <FaCogs />,
  'Rouage': <FaCog />,
  'Money': <FaMoneyBillAlt />,
  'CommentSlash': <FaCommentSlash />,
  'SadFace': <FaSadCry />,
  'Analytics': <IoAnalyticsOutline />,
  'FaceSmile': <CiFaceSmile />,
  'Tools': <RiToolsLine />,
  'ChartPie': <TbChartPie />,
  'Seedling': <LiaSeedlingSolid />,
  'Rocket': <GoRocket />,
  'Lightning': <HiOutlineLightningBolt />,
  'Mobile': <CiMobile2 />,
  'Heartbeat': <PiHeartbeat />,
  'List': <LiaClipboardListSolid />,
  'CalendarCheck': <LuCalendarCheck />,
  'Search': <RiSearch2Line />,
  'Bug': <IoBugOutline />,
  'Shield': <IoShieldHalf />,
  'NetworkWired': <LiaNetworkWiredSolid />,
  'Wifi': <MdOutlineWifi />,
  'GlobeEurope': <FaGlobeEurope />,
  'Database': <BsDatabase />,
  'Cloud': <MdCloudQueue />,
  'Server': <LuServerCog />,
  'Hdd': <BsDeviceHdd />,
}

/**
 * Props for `AdvantagesCards`.
 */
export type AdvantagesCardsProps =
  SliceComponentProps<Content.AdvantagesCardsSlice>;

/**
 * Component for "AdvantagesCards" Slices.
 */
const AdvantagesCards = async ({ slice }: AdvantagesCardsProps): Promise<JSX.Element> => {

  if (slice.variation === "withoutIcons") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <ServicePresentationSection
          variant="withoutIcons"
          subtitle={slice.primary.badge_text}
          title={slice.primary.title}
          description={slice.primary.description}
          cards={slice.primary.cards.map((card) => ({
            description: card.description,
            title: card.title
          }))
          }
          below={slice.primary.alignment === "Col" ? true : false}
          cols={slice.primary.columns}
        />
      </section>
    );
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServicePresentationSection
        subtitle={slice.primary.badge_text}
        title={slice.primary.title}
        description={slice.primary.description}
        cards={slice.primary.cards.map((card) => ({
          description: card.description,
          icon: IconsData[card.icon],
          title: card.title
        }))
        }
        below={slice.primary.alignment === "Col" ? true : false}
        cols={slice.primary.columns}
      />
    </section>
  );
};

type ServicePresentationSectionProps = {
  variant?: "withoutIcons"
  title: KeyTextField
  subtitle: KeyTextField
  description: RichTextField
  cards: FeatureCardData[]
  below?: boolean
  cols: "4 Cols" | "2 Cols" | "3 Cols"
}

const ServicePresentationSection = ({ title, subtitle, description, cards, below, cols, variant }: ServicePresentationSectionProps) => {
  return (
    <div className={
      cn(
        variant === "withoutIcons" ? "" :
          "bg-primary-white"
      )
    }>
      <div className="app-container section-py">
        <div
          className={
            cn(
              "grid grid-cols-1 sm:grid-cols-2 gap-0 sm:gap-10 justify-end",
              below && "sm:grid-cols-1"
            )
          }
        >
          <div>
            <h6
              className="text-primary-normal-purple text-base border border-primary-normal-purple px-3 py-1 rounded-full w-fit font-normal font-raleway"
            >
              {subtitle}
            </h6>
            <h2 className="title-h2 mt-4 text-start">
              {title}
            </h2>
            {
              below && (
                // <div className="mt-4 title-p"
                //   dangerouslySetInnerHTML={{ __html: description as string }}
                // />
                <div className="space-y-2 mt-4">
                  <PrismicRichText
                    field={description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="title-p-lg">{children}</p>
                      )
                    }}
                  />
                </div>
              )
            }
          </div>
          {
            !below && (
              <div
                className="flex items-end mt-4 sm:mt-0"
              >
                {/* <div className="title-p text-center sm:text-start"
                  dangerouslySetInnerHTML={{ __html: description as string }}
                /> */}
                <div className="space-y-2">
                  <PrismicRichText
                    field={description}
                    components={{
                      paragraph: ({ children }) => (
                        <p className="title-p text-start">{children}</p>
                      )
                    }}
                  />
                </div>
              </div>
            )
          }
        </div>
        <div
          className={
            cn(
              "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 justify-end mt-10 sm:mt-20",
              cols === "4 Cols" && "md:grid-cols-4",
              cols === "2 Cols" && "md:grid-cols-2",
              cols === "3 Cols" && "md:grid-cols-3",
            )
          }
        >
          {/* // max 4 if 4 cols */}
          {
            cols === "4 Cols" ? (
              cards.slice(0, 4).map((card, index) => (
                <FeatureCard
                  key={index}
                  data={card}
                />
              ))
            ) : (
              cards.map((card, index) => (
                <FeatureCard
                  key={index}
                  data={card}
                />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default AdvantagesCards;
