import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan | Portfólio",
  description:
    "Meu portfólio pessoal, mostrando meus projetos e habilidades como Engenheiro de Software, Desenvolvedor Fullstack e entusiasta de Cybersecurity.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-br"
      className={`${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="fixed inset-0 -z-10 bg-radial from-[#0b1a02] via-[#0d0d0d] to-[#000000]"></div>
        {children}
      </body>
    </html>
  );
}
