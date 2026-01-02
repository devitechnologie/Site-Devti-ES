import Image from 'next/image'
import Link from 'next/link'
import { BlogpostDocument } from '../../../prismicio-types'
import { PrismicNextImage } from '@prismicio/next'
import { format } from 'date-fns'
import { PrismicRichText } from '@prismicio/react'
import { ShareOnFb, ShareOnTwitter } from '../ShareBtns'
import { getTranslations } from 'next-intl/server'

type BlogMainContentProps = {
  blog: BlogpostDocument
}

const BlogMainContent = ({ blog }: BlogMainContentProps) => {
  return (
    <div className="w-full">
      <BlogHeader />
      {/* line */}
      <div className="w-[70px] h-[2px] bg-primary-normal-purple my-12"></div>
      {/* content */}
      <BlogPostContent
        blog={blog}
      />
    </div>
  )
}

const BlogPostContent = ({ blog }: BlogMainContentProps) => {
  return (
    <div className='relative'>
      {/* title */}
      <h1
        className='text-3xl font-bold text-primary-dark-purple mb-8 leading-10'
      >
        {
          blog.data.title
        }
      </h1>
      {/* lien */}
      <div
        className='text-gray-500 text-xs mb-8'
      >
        <Link href={'/blog'} className='hover:underline'>
          Blog
        </Link>
        <span className='mx-2'>/</span>
        <span>
          {
            blog.uid
          }
        </span>
      </div>
      {/* cover image */}
      <div className='aspect-video'>
        <PrismicNextImage
          width={1000}
          height={500}
          field={blog.data.image}
          alt=""
          className='w-full h-full object-cover rounded-sm shadow-card-shadow-border'
        />
      </div>
      {/* date */}
      <div className='flex items-center gap-4 mt-4'>
        <p
          className='text-gray-500 text-xs'
        >
          <span className='text-primary-normal-purple'>
            {
              format(new Date(blog.first_publication_date), 'dd MMMM yyyy')
            }
          </span>
        </p>
        <p
          className='text-gray-500 text-xs'
        >
          <span className='mr-2'>par</span>
          <span className='text-primary-normal-purple'>DevTi Technologie</span>
        </p>
        <p
          className='text-gray-500 text-xs'
        >
          {
            blog.tags.length > 0 && <span className='mr-2'>Tags: </span>
          }
          <span className='text-primary-normal-purple'>
            {
              blog.tags.map((tag, index) => (
                <span key={index} className='mr-2'>{tag}</span>
              ))
            }
          </span>
        </p>
      </div>
      {/* text */}
      <div id='blog-content' className='mt-8 prose prose-headings:mt-3 max-w-full prose-ol:px-3 prose-ul:px-3 list-disc prose-li:marker:text-transparent'>
        <PrismicRichText
          field={blog.data.blog_content}
          components={{
            hyperlink: ({ children, node }) => (
              <Link href={node.data.url ?? ''} className='text-primary-normal-purple hover:underline'>
                {children}
              </Link>
            )
          }}
        />
      </div>

      {/* social media link share */}
      <div>
        <div className='flex items-center gap-4 mt-8'>
          <span className='text-gray-500 text-xs'>
            Partager sur:
          </span>
          <div className='flex gap-4'>
            <ShareOnFb
              url={`https://devtitechnologie.com/blog/${blog.uid}`}
              title={blog.data.title ?? ''}
            />
            <ShareOnTwitter
              url={`https://devtitechnologie.com/blog/${blog.uid}`}
              title={blog.data.title ?? ''}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogHeader = async () => {
  const t = await getTranslations()

  return (
    <div className="flex items-center gap-12">
      <div className='w-20 h-20 shadow-xl rounded-full overflow-hidden bg-white flex justify-center items-center'>
        <Image
          src="/images/Logo DEVTI TECHNOLOGIE-06.png"
          width={200}
          height={200}
          alt="DevTi Technology"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center bg-gray-100 p-5 rounded-sm relative flex-1">
        <span className='font-bold'>
          {
            t('blog.header.title')
          }
        </span>
        <span className='mt-1 text-sm font-normal'>
          {
            t('blog.header.description')
          } {" "}
          <Link href={'/contact'} className="text-primary-normal-purple hover:underline">
            {t('blog.header.link')}
          </Link>
        </span>
        <div
          className='absolute top-1/2 -left-3 w-6 h-6 bg-gray-100 transform -translate-y-1/2 rotate-45 flex justify-center items-center cursor-pointer'
        ></div>
      </div>
    </div>
  )
}

export default BlogMainContent

{/* 
  <div id='blog-content'>
  <div
    className='text-gray-800 text-lg mt-8 li-bullet'
  >
    <div>
      <span className='font-bold'>Les descriptions de poste et les rôles les plus courants en marketing numérique</span>
      <br />
      <br />
      Le marketing numérique est un domaine en constante évolution et en pleine croissance. Il existe de nombreux rôles différents dans le marketing numérique, et les descriptions de poste peuvent varier considérablement d'une entreprise à l'autre. Cependant, il existe des similitudes entre les descriptions de poste et les rôles les plus courants en marketing numérique.
      <br />
      <br />
      Dans cet article, nous allons examiner les descriptions de poste et les rôles les plus courants en marketing numérique. Nous allons également examiner les compétences nécessaires pour réussir dans ces rôles.
      <br />
      <br />
      <span className='font-bold'>Les descriptions de poste et les rôles les plus courants en marketing numérique</span>
      <br />
      <br />
      Les descriptions de poste et les rôles les plus courants en marketing numérique sont les suivants:
      <br />
      <br />
      <span className='font-bold'>Spécialiste du marketing numérique</span>
      <br />
      <br />
      Un spécialiste du marketing numérique est responsable de la création et de la mise en œuvre de stratégies de marketing numérique. Ils sont chargés de la création de contenu, de la gestion des médias sociaux, de l'optimisation des moteurs de recherche (SEO), de la publicité payante et de l'analyse des données.
      <br />
      <br />
      Un spécialiste du marketing numérique est responsable de la création et de la mise en œuvre de stratégies de marketing numérique. Ils sont chargés de la création de contenu, de la gestion des médias sociaux, de l'optimisation des moteurs de recherche (SEO), de la publicité payante et de l'analyse des données.
      <br />
      <br />
      <span className='font-bold'>Spécialiste du marketing de contenu</span>
      <br />
      <br />
      Un spécialiste du marketing de contenu est responsable de la création de contenu pour les médias sociaux, les blogs, les sites
    </div>
  </div>
  <div>
    <h2
      className='text-2xl font-bold text-primary-dark-purple mt-12 mb-8'
    >
      Principales conclusions sur les postes en marketing
    </h2>
    <ul
      className='text-gray-800 text-lg flex flex-col gap-4'
    >
      <li>
        <span>Le marketing numérique est un domaine en constante évolution et en pleine croissance.</span>
      </li>
      <li>
        <span>Les descriptions de poste et les rôles les plus courants en marketing numérique sont les suivants:</span>
      </li>
      <li>
        <span>Un spécialiste du marketing de contenu est responsable de la création de contenu pour les médias sociaux, les blogs, les sites Web et les autres canaux de marketing numérique.</span>
      </li>
    </ul>
  </div>
</div>
  */}