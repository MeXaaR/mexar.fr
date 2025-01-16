import ContextProvider from "@/context/ContextProvider";
import { Analytics } from "@vercel/analytics/react";

import "@/assets/vendors/animate.css";
import "@/assets/vendors/custom-animate.css";
import "@/assets/vendors/flaticon.css";
import "@/assets/vendors/fontawesome-all.css";
import "@/assets/vendors/linoor-icons.css";
import "@/assets/vendors/reey-font.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "react-circular-progressbar/dist/styles.css";
import "tiny-slider/dist/tiny-slider.css";

// extra css
import "./globals.css";

import { Rubik, Teko, Barlow, Jost, DM_Sans } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';
import { Kumbh_Sans } from 'next/font/google';
import { Shadows_Into_Light } from 'next/font/google';
import { DESCRIPTION, KEYWORDS, TITLE } from "@/data/titles";

const rubik = Rubik({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    variable: '--font-rubik',
    display: 'swap',
});

const teko = Teko({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-teko',
    display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
    style: ['normal', 'italic'],
    variable: '--font-roboto-condensed',
    display: 'swap',
});

const barlow = Barlow({
    subsets: ['latin'],
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-barlow',
    display: 'swap',
});

const jost = Jost({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    variable: '--font-jost',
    display: 'swap',
});

const kumbhSans = Kumbh_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '600', '700', '800', '900'],
    variable: '--font-kumbh-sans',
    display: 'swap',
});

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    variable: '--font-dm-sans',
    display: 'swap',
});

const shadowsIntoLight = Shadows_Into_Light({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-shadows-into-light',
    display: 'swap',
});


export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    keywords: KEYWORDS,
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        type: "website",
        url: "https://mexar.fr",
        image: "https://mexar.fr/images/logo-dark.png",
    },
    twitter: {
        card: "summary_large_image",
        title: TITLE,
        description: DESCRIPTION,
        image: "https://mexar.fr/images/logo-dark.png",
    },
    robots: "index, follow",
    language: "French",
    author: "François AUBEUT",
    themeColor: "#ffffff",
    viewport: "width=device-width, initial-scale=1.0",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
    other: {
        "apple-mobile-web-app-title": "Mexar",
        "application-name": "Mexar",
        "X-UA-Compatible": "IE=edge",
    },
    metadataBase: new URL("https://mexar.fr"),
};

export default function RootLayout({ children }) {
    return (
        <html lang="fr" className={`
            ${rubik.variable} 
            ${teko.variable} 
            ${robotoCondensed.variable}
            ${barlow.variable}
            ${jost.variable}
            ${kumbhSans.variable}
            ${dmSans.variable}
            ${shadowsIntoLight.variable}
        `}>
            <body>
                <ContextProvider>
                    {children}
                </ContextProvider>
                <Analytics />
            </body>
        </html>
    );
}
