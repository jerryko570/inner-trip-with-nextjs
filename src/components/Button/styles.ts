import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
  "w-full h-[54px] text-lg text-white bold rounded-lg cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-primary-40 hover:bg-primary-50",
        disabled: "bg-gray-30",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
