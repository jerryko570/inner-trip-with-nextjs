import { VariantProps } from "class-variance-authority";
import { ButtonVariants } from "./styles";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants>;

export default function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={cn(ButtonVariants({ variant }), className)} />
  );
}
