'use client';

import { useForm } from 'react-hook-form';
import { AuthValidation } from '@/lib/validation/authValidation';

interface LoginFormData {
  email: string;
  password: string;
}

export default function useLogin() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: 'onChange',
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      console.log('로그인 데이터:', data);

      // TODO: 나중에 API 호출
    } catch (error) {
      console.error('로그인 실패', error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    setValue,
    errors,
    isSubmitting,
    validation: AuthValidation,
  };
}
