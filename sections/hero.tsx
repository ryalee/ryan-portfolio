import Botao from "@/components/Botao";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row justify-around items-center py-20 md:mt-20">
      <div>
        <h1 className="text-xl w-100 py-5 md:py-0 text-center md:text-left md:text-5xl md:w-200">
          Engenheiro de Software, Desenvolvedor FullStack & entusiasta de
          Cybersecurity
        </h1>

        <div className="flex md:items-center justify-center md:justify-start gap-2 mt-4">
          <Image
            src="/images/hero/star.png"
            alt="Star"
            width={20}
            height={20}
          />

          <p>+4 anos de XP como freelancer</p>
        </div>

        <div className="flex md:items-center md:justify-start gap-5 mt-4">
          <a 
            href="/currículo_RYAN-ALECRIM-SODRE.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-[25%]"
          >
            <Botao
              label="Meu Currículo"
              icon={
                <Image
                  src="/images/hero/attach.png"
                  alt="attach"
                  width={25}
                  height={25}
                />
              }
            />
          </a>

          <a href="https://www.linkedin.com/in/ryan-alecrim-sodre/" target="_blank" rel="noopener noreferrer" className="flex w-[25%]">
            <Botao
              label="LinkedIn"
              icon={
                <Image
                  src="/images/contact/linkedin.png"
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              }
              className="bg-blue-800"
            />
          </a>

          <a href="https://github.com/ryalee" target="_blank" rel="noopener noreferrer" className="flex w-[25%]">
            <Botao
              label="GitHub"
              icon={
                <Image
                  src="/images/contact/github.png"
                  alt="github"
                  width={25}
                  height={25}
                />
              }
              className="bg-gray-950"
            />
          </a>
        </div>
      </div>

      <Image
        src="/images/hero/eu.png"
        alt="Imagem principal"
        width={400}
        height={400}
        className="animate -z-10"
      />
    </section>
  );
}
