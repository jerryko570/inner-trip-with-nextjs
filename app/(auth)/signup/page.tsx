"use client";

import { useState } from "react";
import Image from "next/image";

import Input from "@/components/Input/Input";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import Button from "@/components/Button/Button";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center gap-20 pt-20">
      <Image src="/logo.svg" alt="logo" width={400} height={100} />

      <div className="w-full max-w-[500px] space-y-4">
        <Input
          status="default"
          placeholder="아이디를 입력하세요"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onClear={() => setUsername("")}
        />

        <PasswordInput
          status="default"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="pt-4">
          <Button variant="primary">회원가입</Button>
        </div>

        <p className="flex items-center justify-center pt-4">
          <span className="text-bg">회원이 아니신가요?</span>
          <a href="/login" className="pl-3 text-blue-20 bold">
            로그인하기
          </a>
        </p>
      </div>
    </div>
  );
}
