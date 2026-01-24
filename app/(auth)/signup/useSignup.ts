'use client';

import { useForm } from 'react-hook-form';
import { AuthValidation } from '@/lib/validation/authValidation';

interface SignupFormData {
  email: string;
  password: string;
}

export default function useSignup() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>({
    mode: 'onChange',
  });

  const onSubmit = async (data: SignupFormData) => {
    try {
      console.log('회원가입 데이터:', data);

      // TODO: 나중에 API 호출
    } catch (error) {
      console.error('회원가입 실패', error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    setValue,
    watch,
    errors,
    isSubmitting,
    validation: AuthValidation,
  };
}
