"use client";
import React from "react";
import clsx from "clsx";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...rest }: Props) => {
  return (
    <button
      className={clsx(
        "bg-[#0064B3] text-white ",
        "px-5 py-2 leading-6",
        "rounded-full ",
        "font-semibold tracking-wide",
        "cursor-pointer",
        "inline-flex items-center justify-center ",
        "relative shadow ",
        // hover
        "transition",
        "hover:bg-indigo-600 hover:shadow-md",
        // focus
        "outline-none",
        "ring-indigo-500/70 ring-offset-2",
        "focus-visible:ring-2 focus:scale-[0.98]",
        // disabled
        "disabled:bg-indigo-500/50 disabled:cursor-not-allowed disabled:shadow",
        className
      )}
      {...rest}
    />
  );
};
