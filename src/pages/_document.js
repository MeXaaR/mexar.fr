import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="favicon.ico"
            id="fav-shortcut"
            type="image/x-icon"
          />
          <link
            rel="icon"
            href="favicon.ico"
            id="fav-icon"
            type="image/x-icon"
          />
          <link rel="icon" href="favicon.ico" />
          {/* Titre de la page */}
          <title>Mexar - Développeur Expert en TypeScript et Outils Sur Mesure</title>

          {/* Description de la page */}
          <meta name="description" content="Bienvenue sur Mexar.fr, Développeur spécialisé en TypeScript, React, et création d'outils professionnels sur mesure pour répondre aux besoins uniques de chaque projet." />

          {/* Balises Open Graph pour les réseaux sociaux */}
          <meta property="og:title" content="Mexar - Développeur Expert en TypeScript et Outils Sur Mesure" />
          <meta property="og:description" content="Découvrez Mexar, un développeur passionné par TypeScript et la création d'outils professionnels personnalisés. Explorez des solutions innovantes et adaptées à vos besoins techniques." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mexar.fr" />
          <meta property="og:image" content="https://mexar.fr/images/logo-dark.png" /> {/* Remplacez par l'URL de votre image */}

          {/* Balises Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Mexar - Développeur Expert en TypeScript et Outils Sur Mesure" />
          <meta name="twitter:description" content="Explorez le portfolio de Mexar, spécialisé en TypeScript et en développement d'outils professionnels sur mesure. Des solutions techniques avancées pour des besoins uniques." />
          <meta name="twitter:image" content="https://mexar.fr/images/logo-dark.png" /> {/* Remplacez par l'URL de votre image */}

          {/* Balise Canonical */}
          <link rel="canonical" href="https://mexar.fr" />

          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Balises supplémentaires pour le SEO */}
          <meta name="robots" content="index, follow" />
          <meta name="language" content="French" />
          <meta name="author" content="François AUBEUT" />

          {/* Balises pour les mobiles */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Balise Theme Color */}
          <meta name="theme-color" content="#ffffff" />

          {/* Balises pour améliorer l'accessibilité et l'expérience utilisateur */}
          <meta name="apple-mobile-web-app-title" content="Mexar" />
          <meta name="application-name" content="Mexar" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Teko:wght@300;400;500;600;700&family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300;400;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Shadows+Into+Light&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
