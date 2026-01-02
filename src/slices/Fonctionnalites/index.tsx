import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { LuFileBadge, LuLayoutDashboard, LuUsers2 } from "react-icons/lu"
import { TbBrandGoogleAnalytics, TbBrandStorybook } from "react-icons/tb"
import { LiaPhoneSquareAltSolid, LiaCommentSolid, LiaShippingFastSolid } from "react-icons/lia"
import { AiOutlineLike, AiOutlineSafety } from "react-icons/ai"
import { FaRegAddressBook, FaCameraRetro, FaWpforms, FaLanguage } from "react-icons/fa"
import { BsPinMap, BsCart } from "react-icons/bs"
import { IoChatbubblesOutline, IoShareSocialOutline } from "react-icons/io5"
import { ImConnection, ImStatsBars2 } from "react-icons/im"
import { MdFeed, MdOutlineFindInPage, MdOutlineFormatListNumbered, MdOutlineMailOutline, MdOutlineMarkUnreadChatAlt, MdOutlineReviews, MdOutlineVideoLibrary, MdPayment, MdPhonelink } from "react-icons/md"
import { PiTarget } from "react-icons/pi"
import { FaPhotoFilm, FaQ } from "react-icons/fa6"
import { GrMapLocation, GrStorage } from "react-icons/gr"
import { IoMdNotificationsOutline } from "react-icons/io"
import { CgProfile } from "react-icons/cg"
import { TiClipboard } from "react-icons/ti"
import { getTranslations } from "next-intl/server";
import { FonctionnalitesSliceCustomFeaturesCardPrimaryGroupCardsItem } from "../../../prismicio-types";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Fonctionnalites`.
 */
export type FonctionnalitesProps =
  SliceComponentProps<Content.FonctionnalitesSlice>;

/**
 * Component for "Fonctionnalites" Slices.
 */
const Fonctionnalites = async ({ slice }: FonctionnalitesProps): Promise<JSX.Element> => {
  const t = await getTranslations();

  if (slice.variation === "customFeaturesCard") {
    return (
      <section
        className="app-container section-py"
      >
        <div className="max-w-[750px] mx-auto mb-16">
          <h2
            className="title-h2 text-center"
          >
            {slice.primary.title}
          </h2>
          <p
            className="text-center title-p mt-3"
          >
            {slice.primary.subtitle}
          </p>
        </div>

        {
          (() => {
            const grouped = slice.primary.group_cards.reduce((acc, item) => {
              const key = item.group_by || "Other";
              (acc[key] ??= []).push(item);
              return acc;
            }, {} as Record<string, FonctionnalitesSliceCustomFeaturesCardPrimaryGroupCardsItem[]>);

            return Object.entries(grouped).map(([groupName, cards]) => (
              <div key={groupName} className="mb-10">
                <h3 className="font-bold text-xl text-primary-normal-purple mb-8">
                  {groupName}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
                  {cards.map((card, index) => (
                    <FunctionnalitesCard
                      key={`${groupName}-${index}`}
                      content={card}
                    />
                  ))}
                </div>
              </div>
            ));
          })()
        }
      </section>
    )
  }

  return (
    <section
      className="app-container section-py"
    >
      <div>
        <h2
          className="title-h2 text-center"
        >
          {
            t("home.functionnalites.title")
          }
        </h2>
        <p
          className="text-center title-p mt-3"
        >
          {
            t("home.functionnalites.description")
          }
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 md:gap-4 mt-20">
        {/* card */}
        <div className="relative bg-gray-50 p-6 pb-6 pt-12 rounded-md shadow-card-shadow-border">
          <div
            className="absolute top-[-10%] left-4 bg-primary-normal-purple text-white text-3xl p-4 rounded-3xl"
          >
            <LuFileBadge />
          </div>
          <ul
            className="flex flex-col space-y-3"
          >
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <TbBrandGoogleAnalytics className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.analytics")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <LiaPhoneSquareAltSolid className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.annuaire")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <AiOutlineSafety className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.authentification")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <FaRegAddressBook className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.agenda")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <FaCameraRetro className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.camera")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <BsPinMap className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.carte/navigation")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <IoChatbubblesOutline className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.chat/aideenligne")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <LiaCommentSolid className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.commentairesetmoderation")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <ImConnection className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.connexionapi")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdOutlineMailOutline className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card1.envoidemails/documents")
                }
              </span>
            </li>
          </ul>
        </div>

        {/* card */}
        <div className="relative bg-gray-50 p-6 pb-6 pt-12 rounded-md shadow-card-shadow-border">
          <div
            className="absolute top-[-10%] left-4 bg-primary-normal-purple text-white text-3xl p-4 rounded-3xl"
          >
            <ImStatsBars2 />
          </div>
          <ul
            className="flex flex-col space-y-3"
          >
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <BsCart className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.ecommerce")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <FaQ className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.foireauxquestions")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <AiOutlineLike className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.favorisetenvies")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdFeed className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.fildactualiteetfeed")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <FaWpforms className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.formulaires")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdOutlineFormatListNumbered className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.forum")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <GrMapLocation className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.geolocalisation")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <LuUsers2 className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.gestiondesutilisateurs")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <LiaShippingFastSolid className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.livraison")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdOutlineMarkUnreadChatAlt className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.messagerieinstantanee")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <FaLanguage className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.multilingue")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdOutlineReviews className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card2.notesetavis")
                }
              </span>
            </li>
          </ul>
        </div>

        {/* card */}
        <div className="relative bg-gray-50 p-6 pb-6 pt-12 rounded-md shadow-card-shadow-border">
          <div
            className="absolute top-[-10%] left-4 bg-primary-normal-purple text-white text-3xl p-4 rounded-3xl"
          >
            <PiTarget />
          </div>
          <ul
            className="flex flex-col space-y-3"
          >
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdPhonelink className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.elearning")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdPayment className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.paiement")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <IoShareSocialOutline className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.partagesocial")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <FaPhotoFilm className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.photos")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <CgProfile className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.profilutilisateur")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <IoMdNotificationsOutline className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.notifications")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <GrStorage className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.stockagedefichiers")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <TbBrandStorybook className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.story")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <TiClipboard className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.reservation")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <LuLayoutDashboard className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.tableaudebord")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdOutlineFindInPage className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.trietfiltres")
                }
              </span>
            </li>
            <li
              className="flex items-center space-x-2 font-semibold text-primary-dark-purple"
            >
              <MdOutlineVideoLibrary className="text-primary-normal-purple text-2xl" />
              <span>
                {
                  t("home.functionnalites.card3.uploadvideos")
                }
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

const FunctionnalitesCard = ({ content }: { content: FonctionnalitesSliceCustomFeaturesCardPrimaryGroupCardsItem }) => {
  return (
    <PrismicNextLink
      field={content.card_link}
      className="relative bg-gray-50 p-6 pb-6 pt-12 rounded-md shadow-card-sm hover:shadow-card-shadow-border transition-all block">
      <div
        className="absolute top-[-10%] left-4 bg-primary-light-blue shadow-card-sm text-white text-3xl p-4 rounded-3xl"
      >
        <PrismicNextImage
          field={content.icon}
          className="w-6 h-6"
        />
      </div>
      <h3
        className="font-bold text-lg text-primary-dark-purple mb-2"
      >
        {content.name}
      </h3>
      <p
        className="text-primary-dark-purple title-p"
      >
        {content.mini_desc}
      </p>
    </PrismicNextLink>
  )
}

export default Fonctionnalites;
