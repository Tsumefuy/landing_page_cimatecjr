import { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/header";
import { Tektur } from "next/font/google";
import { Footer } from "./components/footer";

const tektur = Tektur({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: `PortalGunStore`,
  description: 'Projeto CimatecJr - Gustavo Maia',
  openGraph: {
    title: 'Acesse este site ou este homem irá te perseguir pelos corredores do Cimatec.',
    description:'Uma Landing Page para a segunda etapa do processo seletivo da CimatecJr!',
    images: ['https://i.ibb.co/Xf7XsYN4/IMG-20250311-WA0030.jpg']
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
      </head>
      <body className={`${tektur.className} overflow-x-hidden`}>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
