import Image from "next/image"

const WebSiteCreationFooter = () => {
  return (
    <footer
      className="bg-primary-dark-purple section-py text-white px-4"
    >
      <div className="flex justify-center items-center flex-col">
        <Image
          src="/images/Logo DEVTI TECHNOLOGIE-05 - light.png"
          alt="Description of image"
          className="w-[250px]"
          width={500}
          height={300}
        />

        <div className="space-y-4 mt-4">
          <p className="text-center font-medium text-base">
            Devti Technologie | Agence de développement Web et Mobile By <span
              className="text-primary-normal-purple">DEVTI GROUP</span>
          </p>
          <span
            className="text-center text-base block">
            Bureau N° T203, 2ème étage, Technopark Tanger
          </span>
          <p className="text-center text-base font-light">
            RC 160483 / TP 50104704 / IF 66231804 / ICE 003672479000056 / CNSS 6015119
          </p>
        </div>
      </div>
    </footer>
  )
}

export default WebSiteCreationFooter