import { cva } from 'class-variance-authority';

// 헤더 전체 틀
export const HeaderVariants = cva(
  'h-[80px] w-full flex items-center justify-between px-8',
  {
    variants: {
      variant: {
        default: 'bg-white border-b border-gray-200',
      },
      sticky: {
        true: 'sticky top-0 z-50',
        false: 'relative',
      },
    },
    defaultVariants: {
      variant: 'default',
      sticky: true,
    },
  },
);

// 메뉴 컨테이너
export const HeaderMenuVariants = cva('flex items-center', {
  variants: {
    gap: {
      sm: 'gap-4 md:gap-6',
      md: 'gap-6 md:gap-8',
      lg: 'gap-8 md:gap-12',
    },
  },
  defaultVariants: {
    gap: 'md',
  },
});

// 메뉴 아이템
export const HeaderMenuItemVariants = cva('cursor-pointer transition-colors', {
  variants: {
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
    color: {
      default: 'text-gray-40 hover:text-primary-50',
      active: 'text-primary-50 font-semibold',
      muted: 'text-gray-30 hover:text-gray-40',
    },
  },
  defaultVariants: {
    size: 'lg',
    color: 'default',
  },
});
