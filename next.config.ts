// SVG 파일을 React 컴포넌트처럼 import 해서 사용 가능하고,
// Turbopack에게 SVGR 로더를 적용하라고 알려주는 실제 변환 빌드 설정

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
