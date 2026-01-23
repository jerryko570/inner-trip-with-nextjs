import { cva } from "class-variance-authority";

export const InputVariants = cva(
  "w-full h-[54px] border border-gray-30 pl-4 rounded-lg focus:outline-none",
  {
    variants: {
      status: {
        default: "focus:border-primary-50",
        error: "border-red-20",
      },
    },
    defaultVariants: {
      status: "default",
    },
  },
);
