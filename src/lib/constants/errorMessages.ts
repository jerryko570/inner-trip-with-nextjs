/**
 * Supabase 에러 메시지를 한글로 변환
 */

import { ErrorMessages } from '@/lib/types/auth';

const SUPABASE_ERROR_MESSAGES: ErrorMessages = {
  // 회원가입 에러
  'User already registered': '이미 가입된 이메일입니다.',
  'Password should be at least 6 characters':
    '비밀번호는 최소 6자 이상이어야 합니다.',
  'Unable to validate email address: invalid format':
    '올바른 이메일 형식이 아닙니다.',
  'Signup requires a valid password': '유효한 비밀번호를 입력해주세요.',

  // 로그인 에러
  'Invalid login credentials': '이메일 또는 비밀번호가 잘못되었습니다.',
  'Email not confirmed': '이메일 인증이 필요합니다.',
  'User not found': '등록되지 않은 사용자입니다.',

  // 일반 에러
  'Network request failed': '네트워크 연결을 확인해주세요.',
};

/**
 * 함수 호이스팅으로 보관함에 저장함
 */
export function getSupabaseErrorMessage(errorMessage: string): string {
  return (
    SUPABASE_ERROR_MESSAGES[errorMessage] ||
    '오류가 발생했습니다. 다시 시도해주세요.'
  );
}

/**
 * SUPABASE_ERROR_MESSAGES 객체는
 * supabase에서 전달되는 에러 메시지를 key로 가지고,
 * 해당 에러에 대응하는 한글 메시지를 value로 가지는 매핑 테이블이다.
 *
 * getSupabaseErrorMessage 함수는 문자열 형태의 errorMessage를 받아
 * SUPABASE_ERROR_MESSAGES에서 일치하는 메시지를 찾아 반환하고,
 * 일치하는 값이 없을 경우 기본 에러 메시지를 반환한다.
 */
