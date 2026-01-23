"use client";

import Image from "next/image";
import React, { useState } from "react";
import { VariantProps } from "class-variance-authority";

import { InputVariants } from "../shared/styles";
import { cn } from "@/lib/cn";

import EyesOffIcon from "@/assets/icons/eyes-off.svg";
import EyesOnIcon from "@/assets/icons/eyes-on.svg";

type PasswordInputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputVariants>;

export default function PasswordInput({
  status,
  className,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center w-full">
      <div className="relative w-full max-w-[500px]">
        <input
          type={showPassword ? "text" : "password"}
          {...props}
          className={cn(InputVariants({ status }), "pr-12", className)}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer"
        >
          <Image
            src={showPassword ? EyesOnIcon : EyesOffIcon}
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
