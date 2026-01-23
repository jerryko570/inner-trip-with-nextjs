"use client";

import { useState } from "react";
import { InputVariants } from "../shared/styles";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import DeleteIcon from "@/assets/icons/delete.svg";
import Image from "next/image";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputVariants>;

export default function Input({ status, className, ...props }: InputProps) {
  const [inputValue, setInputValue] = useState("");

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="flex justify-center w-full">
      <div className="relative w-full max-w-[500px]">
        <input
          {...props}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={cn(InputVariants({ status }), className)}
        />

        {inputValue && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer"
          >
            <Image src={DeleteIcon} alt="" width={20} height={20} />
          </button>
        )}
      </div>
    </div>
  );
}
