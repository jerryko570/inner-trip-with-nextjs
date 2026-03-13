import { cva } from 'class-variance-authority';

export const ButtonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-bold transition-colors cursor-pointer',
  {
    variants: {
      variant: {
        primary: 'bg-primary-40 text-white hover:bg-primary-50',
        primaryWhite: 'bg-white text-black hover:bg-gray-10',
        outline:
          'border-2 border-primary-40 text-primary-40 bg-transparent hover:bg-primary-5',
        outlineWhite:
          'border-2 border-white text-white bg-transparent hover:bg-white/20',
        disabled: 'bg-gray-30 text-white cursor-not-allowed',
      },
      size: {
        md: 'h-[54px] px-4 text-lg',
        sm: 'h-[40px] px-3 text-sm',
        smToMd: 'h-[40px] px-10 text-sm md:h-[54px] md:px-10 md:text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: true,
    },
  },
);
