/**
 * 회원가입 폼 상태 관리 + API 통신을 담당하는 커스텀 훅
 * React Hook Form으로 폼을 관리하고, React Query로 회원가입 API를 호출하는 로직을 하나로 묶음
 * React Hook Form 👉🏻 폼 상태 관리 (입력값, 검증, 에러)
 * React Query 👉🏻 API 통신 관리 (로딩, 성공, 실패)
 */

'use client';

import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { signup } from '@/lib/api/auth/signup';
import { AuthValidation } from '@/lib/validation/authValidation';
import type { SignupFormData } from '@/lib/types/auth';

export default function useSignup() {
  const router = useRouter();

  // 폼 상테 관리(RHF)
  const {
    register, //input에 달아주면 입력값 자동 저장
    handleSubmit, // 제출 버튼 클릭 시 검증 담당
    setValue, // 코드로 input 값 강제 입력
    getValues, // input에 뭐가 입력됐는지 읽기
    formState: { errors }, // 검증 실패 시 에러 정보
  } = useForm<SignupFormData>({
    mode: 'onChange', // 입력할 때마다 실시간 검증
  });

  // API 호출을 관리하는 도구 상자를 만든다.
  const mutation = useMutation({
    // muattionFn: 실제로 API 호출하는 함수
    mutationFn: (formData: SignupFormData) => signup(formData), // 실제 API 호출

    onSuccess: (data) => {
      console.log('회원가입 성공:', data.user);
      alert('회원가입 성공! 이메일을 확인해주세요.');
      router.push('/login');
    },

    onError: (error: Error) => {
      console.error('회원가입 실패:', error.message);
      alert(error.message);
    },
  });

  const onSubmit = (data: SignupFormData) => {
    mutation.mutate({
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    });
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    setValue,
    getValues,
    errors,
    isSubmitting: mutation.isPending,
    validation: AuthValidation,
  };
}
