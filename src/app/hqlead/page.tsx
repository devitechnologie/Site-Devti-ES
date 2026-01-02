import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway',
});

import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";

const page = () => {
  return (
    <div className={`min-h-screen ${raleway.className} bg-primary-light-blue`}>
      <section>
        <div
          className="min-h-screen pt-[150px] mx-4"
        >
          <div
            className="flex flex-col items-center justify-center"
          >
            <Image
              src="/images/Thank-You-2.png"
              alt=""
              width={600}
              height={600}
              className="w-72"
            />
            <h1
              className="text-3xl font-bold leading-tight text-primary-dark-purple my-4  mt-16 text-center"
            >
              Merci pour votre soumission!
            </h1>
            <p
              className="text-lg mt-4 text-center"
            >
              Merci pour votre soumission! Nous avons bien reçu votre message et nous vous contacterons sous peu.
            </p>
          </div>
          <div
            className="flex flex-col items-center mt-10"
          >
            <Link
              href="/landing-page/creation-site-web"
              className='px-4 py-2 button block'
            >
              Retour à {"l"}accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}


export const metadata = {
  title: 'Thank you',
  description: 'Remerciement',
}

export default page