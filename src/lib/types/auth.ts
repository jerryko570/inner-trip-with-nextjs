export interface SignupFormData {
  email: string;
  password: string;
  passwordConfirm: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface SignupResponse {
  user: {
    id: string;
    email: string;
    created_at: string;
  };
  session: {
    access_token: string;
    refresh_token: string;
    expires_at: number;
  } | null;
  error_description?: string;
  message?: string;
}

export type ErrorMessages = {
  [key: string]: string;
};

export type Messages = {
  [key: string]: string;
};
