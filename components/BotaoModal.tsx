"use client";

import { useState, ReactNode } from "react";
import dynamic from "next/dynamic";

interface BotaoModalProps {
  label: string;
  icon?: ReactNode; 
  className?: string;
  onClick?: () => void;
}

const ContatoModal = dynamic(() => import("./modalContato"), {
  ssr: false,
});

export default function BotaoContato({ label, icon, className, onClick }: BotaoModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
    if (onClick) onClick(); // executa algum evento extra caso o elemento pai envie
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={`flex justify-around w-60 py-3 px-6 rounded-[15px] text-textLight text-[14pt] hover:scale-105 duration-300 transition cursor-pointer bg-black shadow-[4px_4px_0px_0px_#cfcfcf] ${className}`}
      >
        {label}
        {icon}
      </button>

      {isOpen && <ContatoModal onClose={() => setIsOpen(false)} />}
    </>
  );
}