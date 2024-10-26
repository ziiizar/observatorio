"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "w-full py-2 flex place-content-center items-center  font-semibold bg-white rounded-3xl text-[clamp(0.75rem,2vw,1rem)] hover:bg-black hover:shadow-shadowBlackSmall hover:text-white hover:border-black transition-all duration-200 ease-in-out group",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
