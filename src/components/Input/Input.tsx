'use client';

import Image from 'next/image';
import { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/cn';
import { InputVariants } from '../shared/inputVariants';
import DeleteIcon from '@/assets/icons/delete.svg';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  VariantProps<typeof InputVariants> & {
    onClear?: () => void;
  };

export default function Input({
  status,
  className,
  value,
  onChange,
  onClear,
  ...props
}: InputProps) {
  return (
    <div className='relative w-full'>
      <input
        {...props}
        value={value}
        onChange={onChange}
        className={cn(InputVariants({ status }), className)}
      />

      {value && (
        <button
          type='button'
          onClick={onClear}
          className='absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer'
        >
          <Image src={DeleteIcon} alt='삭제' width={20} height={20} />
        </button>
      )}
    </div>
  );
}
