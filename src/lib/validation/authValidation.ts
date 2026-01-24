export const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_PATTERN = /^(?=.*[A-Za-z])(?=.*\d)/;

export const AuthValidation = {
  email: {
    required: '이메일을 입력해주세요',
    pattern: {
      value: EMAIL_PATTERN,
      message: '이메일 형식이 올바르지 않습니다',
    },
  },

  password: {
    required: '비밀번호를 입력하세요',
    minLength: {
      value: 8,
      message: '8자 이상 입력해주세요',
    },

    pattern: {
      value: PASSWORD_PATTERN,
      message: '영문과 숫자를 포함해야 합니다',
    },
  },

  passwordConfirm: (password: string) => ({
    required: '비밀번호를 다시 입력해주세요',
    validate: (value: string) =>
      value === password || '비밀번호가 일치하지 않습니다',
  }),
};
