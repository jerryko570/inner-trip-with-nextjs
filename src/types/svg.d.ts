// TypeScript에게 svg 파일은 문자열로 사용할 수 있고
// React 컴포넌트로도 사용할 수 있다라고 선언하는 타입 설명서

declare module "*.svg" {
  import { FC, SVGProps } from "react";
  const ReactComponent: FC<SVGProps<SVGSVGElement>>;
  const content: string;

  export { ReactComponent };
  export default content;
}
