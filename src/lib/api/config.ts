/**
 * Supabase 설정
 *
 * .env.local에 저장된 환경변수를 가져와서 config 객체로 내보냄
 *
 * process.env: Node.js 환경변수 객체
 * - 주소들 (Supabase URL, API 주소 등)
 * - 비밀 키들 (API Key 등)
 * - 환경 모드 (개발/운영)
 * - 기타 설정들
 */

// process -> 지금 실행중인 Node/Next 환경
// .env -> 환경변수 모아둔 객체 중 env에 서 꺼내고 그 값을 변수에 저장함
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const config = {
  url: SUPABASE_URL,
  key: SUPABASE_ANON_KEY,
};
