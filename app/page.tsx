'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/HeroSection/HeroSection';

export default function HomePage() {
  const router = useRouter();

  return (
    <>
      <Header
        onLogoClick={() => router.push('/')}
        onLoginClick={() => router.push('/login')}
      />
      <HeroSection />
    </>
  );
}
