import Link from "next/link";

export default async function Page() {
  return (
    <div
      className='flex items-center justify-center min-h-[calc(100vh-90px)] flex-col'
    >
      <h1
        className='text-4xl font-bold text-primary-dark-purple'
      >404 - Page Not Found</h1>
      <p
        className='text-lg mt-4 text-center'
      >
        La page que vous cherchez n{"'"}existe pas.
      </p>
      <Link
        href="/"
        className='px-4 py-2 button inline-block mt-8'
      >
        Se rendre à la page d{"'"}accueil
      </Link>
    </div>
  );
}