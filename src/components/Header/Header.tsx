import { VariantProps } from 'class-variance-authority';
import {
  HeaderVariants,
  HeaderMenuVariants,
  HeaderMenuItemVariants,
} from './Header.variants';
import Image from 'next/image';
import Button from '../Button/Button';
import Link from 'next/link';
import { NavLink } from '@/types/navigationTypes';
import { usePathname } from 'next/navigation'; // 현재 url 경로를 가져오는 next.js 훅
import { NAV_LINKS } from '@/constant/navigationData';

// Header가 받을 수 있는 모든 props를 정의
interface HeaderProps extends VariantProps<typeof HeaderVariants> {
  navLinks?: NavLink[];
  onLogoClick?: () => void;
}

export default function Header({
  variant,
  sticky,
  navLinks = NAV_LINKS,
  onLogoClick,
}: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className={HeaderVariants({ variant, sticky })}>
      <div className='mx-auto max-w-[1200px] w-full flex items-center justify-between'>
        <Link href='/' onClick={onLogoClick}>
          <Image
            src='/logo-symbol.svg'
            alt='INNERTRIP Logo'
            width={62}
            height={60}
            className='md:hidden'
            priority
          />

          <Image
            src='/logo.svg'
            alt='INNERTRIP Logo'
            width={200}
            height={40}
            className='hidden md:block'
            priority
          />
        </Link>

        <div className='flex items-center gap-8'>
          <nav className={HeaderMenuVariants({ gap: 'md' })}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={HeaderMenuItemVariants({
                  size: 'md',
                  color: pathname === link.href ? 'active' : 'default',
                })}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href='/login'>
            <Button variant='primary' size='sm' className='w-20'>
              로그인
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
