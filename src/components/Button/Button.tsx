import React from 'react';
import { VariantProps } from 'class-variance-authority';

import { ButtonVariants } from './Button.variants';
import { cn } from '@/lib/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof ButtonVariants>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, fullWidth, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type='button'
        {...props}
        className={cn(ButtonVariants({ variant, size, fullWidth }), className)}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
