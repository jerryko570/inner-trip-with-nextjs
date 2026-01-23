import { VariantProps } from "class-variance-authority";

import { ButtonVariants } from "./styles";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants>;

export default function Button({
  variant,
  size,
  fullWidth,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(ButtonVariants({ variant, size, fullWidth }), className)}
    >
      {children}
    </button>
  );
}
