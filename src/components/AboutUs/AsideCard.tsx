"use client";

import { cn } from "@/lib/utils";
import { zodiak } from "@/styles/fonts";
import Image from "next/image";
import { useState } from "react";

export type Color = { selected: string; unselected: string };

interface ServiceCardProps {
  description: string;
  color: keyof Color;
  name: string;

  onClick: () => void;
}

const AsideCard: React.FC<ServiceCardProps> = ({
  description,
  color,
  name,
  onClick,
}) => {
  const colors: Color = {
    selected: "bg-burgundy-900 text-white",
    unselected:
      "bg-dusty-gray-100 text-black hover:bg-dusty-gray-400 hover:scale-105",
  };

  return (
    <article
      className={cn(
        "w-full h-40 relative overflow-hidden rounded-xl cursor-pointer transition-transform duration-300 ease-in-out   p-6 ",
        colors[color]
      )}
      onClick={onClick}
    >
      {/* <div className="absolute inset-0">
        <Image 
          alt={name} 
          src={image} 
          layout="fill" 
          objectFit="cover" 
        />
      </div> */}
      {/* <div className={cn("relative rounded-tr-full h-full max-w-md transition-transform duration-300 ease-in-out group-hover:scale-110 flex  px-4", gradientClass)}>
      </div> */}
      <strong className=" font-semibold text-4xl transition-transform duration-300 ease-in-out group-hover:scale-110 flex items-end">
        {name}
      </strong>
      <p className={cn("", zodiak.className)}>{description}</p>
    </article>
  );
};

export default AsideCard;
