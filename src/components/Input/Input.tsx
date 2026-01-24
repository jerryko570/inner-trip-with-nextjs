'use client';

import Image from 'next/image';
import { VariantProps } from 'class-variance-authority';
import { forwardRef, useState } from 'react';
import { cn } from '@/lib/cn';
import { InputVariants } from '../shared/inputVariants';
import DeleteIcon from '@/assets/icons/delete.svg';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputVariants> & {
    onClear?: () => void;
  };

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ status, className, onClear, ...props }, ref) => {
    const [isActive, setIsActive] = useState(false);
    const [hasText, setHasText] = useState(false);

    return (
      <div className='relative w-full'>
        <input
          ref={ref}
          {...props}
          onFocus={(e) => {
            setIsActive(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setHasText(e.target.value.length > 0);
            setIsActive(false);
            props.onBlur?.(e);
          }}
          onChange={(e) => {
            setHasText(e.target.value.length > 0);
            props.onChange?.(e);
          }}
          className={cn(InputVariants({ status }), className)}
        />

        {isActive && hasText && onClear && (
          <button
            type='button'
            onMouseDown={(e) => e.preventDefault()}
            onClick={onClear}
            className='absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer'
          >
            <Image src={DeleteIcon} alt='삭제' width={20} height={20} />
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
export default Input;
