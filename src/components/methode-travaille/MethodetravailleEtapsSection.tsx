"use client"

import { Element } from 'react-scroll'
import { Fade } from 'react-awesome-reveal'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const BgGrowth = '/images/Personal-Growth.png'
const BgPic2 = '/images/Reading-Book.png'
const BgPic3 = '/images/Application-Development.png'
const BgPic4 = '/images/Location.png'
const BgPic5 = '/images/Upload-to-cloud.png'
const BgPic6 = '/images/Customer-Reviews.png'

const MethodetravailleEtapsSection = () => {
  const t = useTranslations()

  return (
    <Element
      name="methodetravaille"
      id='methodetravaille'
    >
      <section
        id='methodetravaille'
        className='app-container section-py overflow-hidden'
      >
        <h2
          className="title-h2 text-center mb-16"
        >
          {
            t('methodeTravaille.etapsSection.title')
          }
        </h2>
        <div className="px-4 flex items-start md:justify-center min-h-[1200px] md:min-h-[2200px] ">
          {/* timeline  */}
          <div
            className="w-1 min-h-[1000px] md:min-h-[1900px] rounded-full h-full border-2 border-primary-normal-purple border-dashed relative"
          >
            <Fade
              direction="up"
              triggerOnce
            >
              <div
                className="absolute -top-1 left-1/2 -translate-x-1/2 h-10 w-10 flex justify-center items-center text-xl text-white font-semibold bg-primary-normal-purple rounded-full"
              >
                1
                <div
                  className="absolute w-[calc(100vw-80px)] max-w-[350px] md:w-[400px] h-[300px] top-1/2 left-[50px] md:-left-[450px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <h3
                      className="title-h2-2 mb-3"
                    >
                      {
                        t('methodeTravaille.etapsSection.step1.h3')
                      }
                    </h3>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce>
                    <p
                      className="title-p"
                    >
                      {
                        t('methodeTravaille.etapsSection.step1.p')
                      }
                    </p>
                  </Fade>
                </div>
                <div
                  className="absolute hidden md:block w-[250px] top-1/2 md:left-[100px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <Image
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-md"
                      src={BgGrowth}
                      alt="Pré-Étude"
                    />
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade
              direction="up"
              triggerOnce
            >
              <div
                className="absolute top-[200px] md:top-[350px] left-1/2 -translate-x-1/2 h-10 w-10 flex justify-center items-center text-xl text-primary-dark-purple font-semibold bg-primary-blue rounded-full"
              >
                2
                <div
                  className="absolute w-[calc(100vw-80px)] max-w-[350px] md:w-[400px] h-[300px] top-1/2 left-[50px] md:left-[100px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <h3
                      className="title-h2-2 mb-3"
                    >
                      {
                        t('methodeTravaille.etapsSection.step2.h3')
                      }
                    </h3>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <p
                      className="title-p"
                    >
                      {
                        t('methodeTravaille.etapsSection.step2.p')
                      }
                    </p>
                  </Fade>
                </div>
                <div
                  className="absolute hidden md:block w-[300px] top-1/2 -left-[350px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <Image
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-md"
                      src={BgPic2}
                      alt="cahier des charges"
                    />
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade
              direction="up"
              triggerOnce
            >
              <div
                className="absolute top-[400px] md:top-[750px] left-1/2 -translate-x-1/2 h-10 w-10 flex justify-center items-center text-xl text-white font-semibold bg-primary-pink rounded-full"
              >
                3
                <div
                  className="absolute  w-[calc(100vw-80px)] max-w-[350px] md:w-[400px] h-[300px] top-1/2 left-[50px] md:-left-[450px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <h3
                      className="title-h2-2 mb-3"
                    >
                      {
                        t('methodeTravaille.etapsSection.step3.h3')
                      }
                    </h3>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <p
                      className="title-p"
                    >
                      {
                        t('methodeTravaille.etapsSection.step3.p')
                      }
                    </p>
                  </Fade>
                </div>
                <div
                  className="absolute hidden md:block w-[350px] top-1/2 left-[100px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <Image
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-md"
                      src={BgPic3}
                      alt="Développement Agile"
                    />
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade
              direction="up"
              triggerOnce
            >
              <div
                className="absolute top-[600px] md:top-[1100px] left-1/2 -translate-x-1/2 h-10 w-10 flex justify-center items-center text-xl text-white font-semibold bg-primary-normal-purple rounded-full"
              >
                4
                <div
                  className="absolute  w-[calc(100vw-80px)] max-w-[350px] md:w-[400px] h-[300px] top-1/2 left-[50px] md:left-[100px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <h3
                      className="title-h2-2 mb-3"
                    >
                      {
                        t('methodeTravaille.etapsSection.step4.h3')
                      }
                    </h3>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <p
                      className="title-p"
                    >
                      {
                        t('methodeTravaille.etapsSection.step4.p')
                      }
                    </p>
                  </Fade>
                </div>
                <div
                  className="absolute hidden md:block w-[400px] top-1/2 -left-[400px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <Image
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-md"
                      src={BgPic4}
                      alt="Suivi"
                    />
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade
              direction="up"
              triggerOnce
            >
              <div
                className="absolute top-[800px] md:top-[1500px] left-1/2 -translate-x-1/2 h-10 w-10 flex justify-center items-center text-xl text-white font-semibold bg-primary-pink rounded-full"
              >
                5
                <div
                  className="absolute  w-[calc(100vw-80px)] max-w-[350px] md:w-[400px] h-[300px] top-1/2 left-[50px] md:-left-[450px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <h3
                      className="title-h2-2 mb-3"
                    >
                      {
                        t('methodeTravaille.etapsSection.step5.h3')
                      }
                    </h3>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce>
                    <p
                      className="title-p"
                    >
                      {
                        t('methodeTravaille.etapsSection.step5.p')
                      }
                    </p>
                  </Fade>
                </div>
                <div
                  className="absolute hidden md:block w-[350px] top-1/2 md:left-[100px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <Image
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-md"
                      src={BgPic5}
                      alt="Déploiement"
                    />
                  </Fade>
                </div>
              </div>
            </Fade>

            <Fade
              direction="up"
              triggerOnce
            >
              <div
                className="absolute top-[1000px] md:top-[1890px] left-1/2 -translate-x-1/2 h-10 w-10 flex justify-center items-center text-xl text-primary-dark-purple font-semibold bg-primary-blue rounded-full"
              >
                6
                <div
                  className="absolute  w-[calc(100vw-80px)] max-w-[350px] md:w-[400px] h-[300px] top-1/2 left-[50px] md:left-[100px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <h3
                      className="title-h2-2 mb-3"
                    >
                      {
                        t('methodeTravaille.etapsSection.step6.h3')
                      }
                    </h3>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <p
                      className="title-p"
                    >
                      {
                        t('methodeTravaille.etapsSection.step6.p')
                      }
                    </p>
                  </Fade>
                </div>
                <div
                  className="absolute hidden md:block w-[400px] top-[0%] -left-[400px] text-black rounded-md"
                >
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <Image
                      width={800}
                      height={800}
                      className="w-full h-full object-cover rounded-md"
                      src={BgPic6}
                      alt="Maintien en Condition Opérationnelle et Évolutions"
                    />
                  </Fade>
                </div>
              </div>
            </Fade>

          </div>
        </div>
      </section>
    </Element>
  )
}

export default MethodetravailleEtapsSection