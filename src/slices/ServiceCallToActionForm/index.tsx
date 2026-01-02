import ServiceCallToActionSection from "@/components/ServiceCallToActionSection";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";

/**
 * Props for `ServiceCallToActionForm`.
 */
export type ServiceCallToActionFormProps =
  SliceComponentProps<Content.ServiceCallToActionFormSlice>;

/**
 * Component for "ServiceCallToActionForm" Slices.
 */
const ServiceCallToActionForm = async ({
  slice,
}: ServiceCallToActionFormProps): Promise<JSX.Element> => {
  const t = await getTranslations()

  const typeService = isFilled.contentRelationship(slice.primary.form_for_service) ?
    slice.primary.form_for_service.uid
    : '';

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServiceCallToActionSection
        imageUrl={slice.primary.custom_image.url ? slice.primary.custom_image.url : undefined}
        title={slice.primary.form_title}
        buttonText={slice.primary.button_text}
        contactTitle={slice.primary.contact_title}
        contactDescription={slice.primary.contact_description}
        selectOptions={
          typeService === 'site-web' ? [
            t('websiteDevelopment.form.selectOptions.0'),
            t('websiteDevelopment.form.selectOptions.1'),
            t('websiteDevelopment.form.selectOptions.2'),
            t('websiteDevelopment.form.selectOptions.3'),
            t('websiteDevelopment.form.selectOptions.4'),
            t('websiteDevelopment.form.selectOptions.5'),
            t('websiteDevelopment.form.selectOptions.6'),
            t('websiteDevelopment.form.selectOptions.7'),
            t('websiteDevelopment.form.selectOptions.8'),
          ]
            : typeService === 'developpement-mobile' ?
              [
                t('mobileDevelopment.from.selectOptions.0'),
                t('mobileDevelopment.from.selectOptions.1'),
                t('mobileDevelopment.from.selectOptions.2'),
                t('mobileDevelopment.from.selectOptions.3'),
                t('mobileDevelopment.from.selectOptions.4'),
                t('mobileDevelopment.from.selectOptions.5'),
                t('mobileDevelopment.from.selectOptions.6'),
                t('mobileDevelopment.from.selectOptions.7'),
                t('mobileDevelopment.from.selectOptions.8'),
              ]
              : typeService === 'developpement-logiciel' ?
                [
                  t('logicielapp.form.selectOptions.0'),
                  t('logicielapp.form.selectOptions.1'),
                  t('logicielapp.form.selectOptions.2'),
                  t('logicielapp.form.selectOptions.3'),
                  t('logicielapp.form.selectOptions.4'),
                  t('logicielapp.form.selectOptions.5'),
                  t('logicielapp.form.selectOptions.6'),
                ]
                : typeService === 'developpement-specifique' ?
                  [
                    t('developpement-specifique.form.selectOptions.0'),
                    t('developpement-specifique.form.selectOptions.1'),
                    t('developpement-specifique.form.selectOptions.2'),
                    t('developpement-specifique.form.selectOptions.3'),
                    t('developpement-specifique.form.selectOptions.4'),
                    t('developpement-specifique.form.selectOptions.5'),
                    t('developpement-specifique.form.selectOptions.6'),
                    t('developpement-specifique.form.selectOptions.7'),
                  ] : typeService === 'developpement-dapplication-web' ?
                    [
                      t('webApp.form.selectOptions.0'),
                      t('webApp.form.selectOptions.1'),
                      t('webApp.form.selectOptions.2'),
                      t('webApp.form.selectOptions.3'),
                      t('webApp.form.selectOptions.4'),
                      t('webApp.form.selectOptions.5'),
                    ] : typeService === 'marketing' ? [
                      t('marketing.form.selectOptions.0'),
                      t('marketing.form.selectOptions.1'),
                      t('marketing.form.selectOptions.2'),
                      t('marketing.form.selectOptions.3'),
                      t('marketing.form.selectOptions.4'),
                      t('marketing.form.selectOptions.5'),
                      t('marketing.form.selectOptions.6'),
                    ]
                      : [
                        t('websiteDevelopment.form.selectOptions.0'),
                        t('websiteDevelopment.form.selectOptions.1'),
                        t('websiteDevelopment.form.selectOptions.2'),
                        t('websiteDevelopment.form.selectOptions.3'),
                        t('websiteDevelopment.form.selectOptions.4'),
                        t('websiteDevelopment.form.selectOptions.5'),
                        t('websiteDevelopment.form.selectOptions.6'),
                        t('websiteDevelopment.form.selectOptions.7'),
                        t('mobileDevelopment.from.selectOptions.0'),
                        t('mobileDevelopment.from.selectOptions.1'),
                        t('mobileDevelopment.from.selectOptions.2'),
                        t('mobileDevelopment.from.selectOptions.3'),
                        t('mobileDevelopment.from.selectOptions.4'),
                        t('mobileDevelopment.from.selectOptions.5'),
                        t('mobileDevelopment.from.selectOptions.6'),
                        t('mobileDevelopment.from.selectOptions.7'),
                        t('webApp.form.selectOptions.0'),
                        t('webApp.form.selectOptions.1'),
                        t('webApp.form.selectOptions.2'),
                        t('webApp.form.selectOptions.3'),
                        t('webApp.form.selectOptions.4'),
                        t('developpement-specifique.form.selectOptions.0'),
                        t('developpement-specifique.form.selectOptions.1'),
                        t('developpement-specifique.form.selectOptions.2'),
                        t('developpement-specifique.form.selectOptions.3'),
                        t('developpement-specifique.form.selectOptions.4'),
                        t('developpement-specifique.form.selectOptions.5'),
                        t('developpement-specifique.form.selectOptions.6'),
                      ]

        }
      />
    </section>
  );
};

export default ServiceCallToActionForm;
