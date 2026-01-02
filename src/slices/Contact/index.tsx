import ContactForm from "@/components/forms/ContactForm";
import ContactWith2ColsForm from "@/components/forms/ContactWith2ColsForm";
import ContactWithReviewsForm from "@/components/forms/ContactWithReviewsForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact = async ({ slice }: ContactProps): Promise<JSX.Element> => {
  const t = await getTranslations();

  if (slice.variation === '2Cols') {
    return (
      <ContactWith2ColsForm
        bullets={slice.primary.bullets}
      />
    )
  }

  if (slice.variation === 'withReviews') {
    return (
      <ContactWithReviewsForm />
    )
  }

  return (
    <section id="contact" className="app-container section-py">
      <div>
        <h2 className="title-h1 text-center">
          {
            t("home.contact.title")
          }
        </h2>
        <p className="title-p text-center mt-5 max-w-[750px] mx-auto"
          dangerouslySetInnerHTML={{ __html: t.raw("home.contact.description") }}
        />
      </div>
      <div
        className="mt-16 max-w-[650px] mx-auto"
      >
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
