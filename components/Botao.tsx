"use client";

import { ReactNode, MouseEventHandler } from "react";

interface BotaoProps {
  label: string;
  icon?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export default function Botao({ label, className, icon, onClick }: BotaoProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={` flex justify-around items-center w-60 py-3 px-6 rounded-sm text-textLight md:text-[12pt] hover:scale-105 duration-300 transition cursor-pointer bg-black shadow-[4px_4px_0px_0px_#cfcfcf] ${className}`}
      >
        {label}
        {icon}
      </button>
    </>
  );
}