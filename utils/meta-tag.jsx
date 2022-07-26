import Head from 'next/head'

export default function MetaTags({ url, title, description, img }) {
  const basePath = 'https://rancang-creative.vercel.app'

  const defaultOpt = {
    defaultTitle: "Rancang Creative",
    defaultDesc: "Kami pemuda pembela agama, pembangkit umat yang utama.",
    defaultImg: "/default.jpeg",
  }

  const option = {
    title: title ? `${title} - ${defaultOpt.defaultTitle}` : defaultOpt.defaultTitle,
    desc: description || defaultOpt.defaultDesc,
    url: `${basePath}/${url || ''}`,
    img: `${basePath}${img || defaultOpt.defaultImg}`
  }

  return (
    <Head>
      {/* Global */}
      <title>{option.title}</title>
      <meta name="apple-mobile-web-app-title" content={option.title} />
      <meta name="description" content={option.desc} />
      <meta name="author" content="Rancang Creative" />
      <meta name="publisher" content="Rancang Creative" />
      <meta name="theme-color" content='#FFFFFF' />
      <meta name="color-scheme" content='white' />
      
      {/* Icons */}
      <link rel="icon" href="/icon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/icon/favicon-16x16.png" />
      <link rel="manifest" href="/icon/site.webmanifest" />

      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={option.title}/>
      <meta itemProp="description" content={option.desc}/>
      <meta itemProp="image" content={option.img}/>

      {/* Open Graph Meta Tags */}
      <meta property="og:site_name" content="Rancang Creative"/>
      <meta property="og:title" content={option.title}/>
      <meta property="og:description" content={option.desc}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content={option.url}/>
      <meta property="og:image" content={option.img}/>
      <meta property="og:image:width" content={1024}/>
      <meta property="og:image:height" content={1024}/>
      <meta property="og:locale" content={'en_US'}/>

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:site" content="@abaihaaqi"/>
      <meta name="twitter:creator" content="@abaihaaqi"/>
    </Head>
  )
}