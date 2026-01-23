'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Input from '@/components/Input/Input';
import PasswordInput from '@/components/PasswordInput/PasswordInput';
import Button from '@/components/Button/Button';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const test = 'hello';

  return (
    <div className='flex flex-col items-center gap-20 pt-20'>
      <Link href='/'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={400}
          height={100}
          className='cursor-pointer'
        />
      </Link>

      <form className='w-full max-w-[500px] space-y-4'>
        <Input
          status='default'
          placeholder='아이디를 입력하세요'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onClear={() => setUsername('')}
        />

        <PasswordInput
          status='default'
          placeholder='비밀번호를 입력하세요'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className='pt-4'>
          <Button type='submit' variant='primary'>
            회원가입
          </Button>
        </div>

        <p className='flex items-center justify-center pt-4'>
          <span className='text-body1'>회원이 아니신가요?</span>
          <Link href='/login' className='pl-3 text-body1 bold text-blue-20'>
            로그인하기
          </Link>
        </p>
      </form>
    </div>
  );
}
