/**
 * 폼 유효성 검사 에러 메시지
 */
export const AUTH_ERROR_MESSAGES = {
  // 이메일
  EMAIL_REQUIRED: '이메일을 입력하세요',
  EMAIL_INVALID: '이메일 형식이 올바르지 않습니다',

  // 비밀번호
  PASSWORD_REQUIRED: '비밀번호를 입력하세요',
  PASSWORD_MIN_LENGTH: '8자 이상 입력해주세요',
  PASSWORD_PATTERN: '영문과 숫자를 포함해야 합니다',

  // 비밀번호 확인
  PASSWORD_CONFIRM_REQUIRED: '비밀번호를 다시 입력하세요',
  PASSWORD_CONFIRM_MISMATCH: '비밀번호가 일치하지 않습니다',
} as const;

/**
 * 정규식 패턴
 */
export const AUTH_PATTERNS = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)/,
} as const;

/**
 * 유효성 검사 규칙
 */
export const AUTH_RULES = {
  PASSWORD_MIN_LENGTH: 8,
} as const;
