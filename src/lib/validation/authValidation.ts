import {
  AUTH_ERROR_MESSAGES,
  AUTH_PATTERNS,
  AUTH_RULES,
} from '@/lib/constants/authMessages';

/**
 * React Hook Form 유효성 검사 규칙
 */
export const AuthValidation = {
  email: {
    required: AUTH_ERROR_MESSAGES.EMAIL_REQUIRED, // 필수체크
    pattern: {
      value: AUTH_PATTERNS.EMAIL, // 실제로 검사할 패턴
      message: AUTH_ERROR_MESSAGES.EMAIL_INVALID, // 틀렸을 때 보여줄 메시지
    },
  },

  password: {
    required: AUTH_ERROR_MESSAGES.PASSWORD_REQUIRED,
    minLength: {
      value: AUTH_RULES.PASSWORD_MIN_LENGTH,
      message: AUTH_ERROR_MESSAGES.PASSWORD_MIN_LENGTH,
    },
    pattern: {
      value: AUTH_PATTERNS.PASSWORD,
      message: AUTH_ERROR_MESSAGES.PASSWORD_PATTERN,
    },
  },

  // paswordConfirm은 함수이고 password(문자열)을 받아서 검증규칙 객체를 반환한다.
  // 그 객체 안에는 필수체크, 비밀번호 일치 체크가 있고 value가 pasword와 같으면 통과하고 다르면 에러메시지를 반환한다.
  passwordConfirm: (password: string) => ({
    required: AUTH_ERROR_MESSAGES.PASSWORD_CONFIRM_REQUIRED,
    validate: (value: string) =>
      value === password || AUTH_ERROR_MESSAGES.PASSWORD_CONFIRM_MISMATCH,
  }),
};
