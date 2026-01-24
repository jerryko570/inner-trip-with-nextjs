'use client';

import Image from 'next/image';
import Link from 'next/link';
import useLogin from './useLogin';

import Input from '@/components/Input/Input';
import PasswordInput from '@/components/PasswordInput/PasswordInput';
import Button from '@/components/Button/Button';
import { InputErrorText } from '@/components/shared/inputErrorText';

export default function LoginPage() {
  const { register, handleSubmit, errors, isSubmitting, validation, setValue } =
    useLogin();

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

      <form onSubmit={handleSubmit} className='w-full max-w-[500px]'>
        <div className='mb-3'>
          <label htmlFor='email' className='sr-only'>
            이메일
          </label>
          <Input
            {...register('email', validation.email)}
            placeholder='이메일을 입력하세요'
            status={errors.email ? 'error' : 'default'}
            onClear={() => setValue('email', '')}
          />
          <p className={InputErrorText()}>
            {''}
            {errors.email?.message || '\u00A0'}
          </p>
        </div>

        <div>
          <label htmlFor='password' className='sr-only'>
            비밀번호
          </label>
          <PasswordInput
            {...register('password', validation.password)}
            placeholder='비밀번호를 입력하세요'
            status={errors.password ? 'error' : 'default'}
          />
          <p className={InputErrorText()}>
            {''}
            {errors.password?.message || '\u00A0'}
          </p>
        </div>

        <div className='pt-5'>
          <Button type='submit' variant='primary' disabled={isSubmitting}>
            {isSubmitting ? '처리 중...' : '로그인'}
          </Button>
        </div>

        <p className='flex items-center justify-center pt-4'>
          <span className='text-body1'>회원이 아니신가요?</span>
          <Link href='/signup' className='pl-3 text-body1 bold text-blue-20'>
            회원가입하기
          </Link>
        </p>
      </form>
    </div>
  );
}
