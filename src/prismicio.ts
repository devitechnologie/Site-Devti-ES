import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName =
  process.env.NEXT_PUBLIC_PRISMIC_ENVIRONMENT || config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 */
// TODO: Update the routes array to match your project's route structure.
const routes: prismic.ClientConfig["routes"] = [
  {
    type: "home_page",
    path: "/",
  },
  {
    type: "blogs_list_page",
    path: "/blog",
  },
  {
    type: "blogpost",
    path: "/blog/:uid",
  },
  {
    type: "aboutpage",
    path: "/a-propos",
  },
  {
    type: "methode_travaille",
    path: "/methode-de-travaille",
  },
  {
    type: "realisationpage",
    path: "/realisation",
  },
  {
    type: "realisationdetailspage",
    path: "/realisation/:uid",
  },
  {
    type: "servicepage",
    path: "/service/:uid",
  },
  {
    type: "contact",
    path: "/contact",
  },
  {
    type: "thank_you_page",
    path: "/thank-you",
  },
  {
    type: "faq_page",
    path: "/faq",
  },
  {
    type: "terms_page",
    path: "/terms",
  },
  {
    type: "our_apps",
    path: "/our-apps",
  },
  {
    type: "join_us_page",
    path: "/nous-rejoindre",
  },
  {
    type: "job_offer",
    path: "/nous-rejoindre/:uid",
  },
  {
    type: "agence",
    path: "/agence/:uid",
  },
  {
    type: "sector_page",
    path: "/sector/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config - Configuration for the Prismic client.
 */
export const createClient = (config: prismicNext.CreateClientConfig = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    fetchOptions:
      process.env.NODE_ENV === "production"
        ? { next: { tags: ["prismic"] }, cache: "force-cache" }
        : { next: { revalidate: 5 } },
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};
