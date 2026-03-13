'use server'; // 이 파일의 모든 함수는 서버에서만 실행됨 (브라우저에 코드가 노출되지 않음)

import { SignupFormData } from '@/lib/types/auth';
import { config } from '../config';
import { getSupabaseErrorMessage } from '@/lib/constants/errorMessages';

export async function signup(formData: SignupFormData) {
  // 세 필드 중 하나라도 비어있으면 함수 즉시 종료 (Early Return)
  if (!formData.email || !formData.password || !formData.passwordConfirm) {
    return;
  }

  try {
    // 서버에 회원가입 요청을 보내고, 응답이 올 때까지 기다림
    const response = await fetch(`${config.url}/auth/v1/signup`, {
      method: 'POST', // 데이터를 새로 생성할 때 사용하는 방식
      headers: {
        apikey: config.key, // 인증된 요청임을 증명하는 키
        'Content-Type': 'application/json', // 'JSON 형식으로 데이터를 보낸다'고 서버에 알림
      },
      body: JSON.stringify({
        // 객체를 문자열로 변환 (네트워크 전송은 문자열만 가능하기 때문)
        email: formData.email,
        password: formData.password,
      }),
    });

    // 응답의 body를 JSON으로 파싱하고 data.email 처럼 점(.)으로 접근 가능해짐
    const data = await response.json();

    if (!response.ok) {
      const message = getSupabaseErrorMessage(
        data.error_description || data.message || data.msg,
      );
      throw new Error(message);
    }

    // 회원가입 성공 시 서버 응답 데이터를 반환
    return data;
  } catch (error) {
    // throw로 던진 에러가 여기서 잡힘
    if (error instanceof Error) {
      throw error; // Error 객체면 그대로 다시 던짐 (위에서 만든 한글 메시지 유지)
    }
    // 예상치 못한 에러면 새 에러를 만들어 던짐
    throw new Error('회원가입 중 오류가 발생했습니다.');
  }
}
