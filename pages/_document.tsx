import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        {/* SEO Meta Tags */}
        <title>Kipli - Automatiza tu Negocio</title>
        <meta name="description" content="Kipli: Gestiona cobranzas, campañas de WhatsApp y fideliza clientes con IA" />
        <meta name="keywords" content="automatización, cobranzas, WhatsApp, IA, negocio, gestión, clientes" />
        <meta name="author" content="Kipli" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Kipli - Automatiza tu Negocio" />
        <meta property="og:description" content="Gestiona cobranzas, envía campañas por WhatsApp y fideliza clientes con IA" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kipli.com" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kipli - Automatiza tu Negocio" />
        <meta name="twitter:description" content="Gestiona cobranzas, campañas de WhatsApp y fideliza clientes con IA" />
        <meta name="twitter:image" content="/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 