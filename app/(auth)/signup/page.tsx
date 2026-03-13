'use client';

import Image from 'next/image';
import Link from 'next/link';
import useSignup from './hooks/useSignup';

import Input from '@/components/Input/Input';
import PasswordInput from '@/components/PasswordInput/PasswordInput';
import Button from '@/components/Button/Button';
import { InputErrorText } from '@/components/shared/inputErrorText';

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    validation,
    setValue,
    getValues,
  } = useSignup();

  return (
    <div className='flex flex-col items-center gap-20'>
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
          <Input
            {...register('email', validation.email)}
            placeholder='이메일을 입력하세요'
            status={errors.email ? 'error' : 'default'}
            onClear={() => setValue('email', '')}
          />
          <p className={InputErrorText()}>
            {errors.email?.message || '\u00A0'}
          </p>
        </div>

        <div className='mb-3'>
          {' '}
          <PasswordInput
            {...register('password', validation.password)}
            placeholder='비밀번호를 입력하세요'
            status={errors.password ? 'error' : 'default'}
          />
          <p className={InputErrorText()}>
            {errors.password?.message || '\u00A0'}
          </p>
        </div>

        <div className='mb-3'>
          <PasswordInput
            {...register(
              'passwordConfirm',
              validation.passwordConfirm(getValues('password')),
            )}
            placeholder='비밀번호를 다시 입력하세요'
            status={errors.passwordConfirm ? 'error' : 'default'}
          />
          <p className={InputErrorText()}>
            {errors.passwordConfirm?.message || '\u00A0'}
          </p>
        </div>

        <div className='pt-5'>
          <Button type='submit' variant='primary' disabled={isSubmitting}>
            {isSubmitting ? '처리 중...' : '회원가입'}
          </Button>
        </div>

        <p className='flex items-center justify-center pt-4'>
          <span className='text-body1'>회원이신가요?</span>
          <Link href='/login' className='pl-3 text-body1 bold text-blue-20'>
            로그인하기
          </Link>
        </p>
      </form>
    </div>
  );
}
