import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
  "w-full h-[54px] text-lg bold rounded-lg cursor-pointer transition-colors",
  {
    variants: {
      variant: {
        primary: "bg-primary-40 text-white hover:bg-primary-50",
        disabled: "bg-gray-30 text-white",
        outline:
          "border-2 border-primary-40 text-primary-40 bg-transparent hover:bg-primary-5",
      },
      size: {
        md: "h-[54px] px-4 text-lg",
        sm: "h-[40px] px-3 text-sm",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);
