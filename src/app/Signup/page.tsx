"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import ConsentCheckbox from "@/components/atoms/AuthCheckBox";
import InputBox from "@/components/molecules/InputBox";
import DropdownBox from "@/components/molecules/DropdownBox";
import { validateEmail, validatePassword, validateName } from "@/utils/validation";
import Logo from "public/images/bowling_logo.png";

function SignupHome() {
  const [consentChecked, setConsentChecked] = useState(false); // 동의 체크 상태

  return (
    <div className="">
      <div className="flex items-center justify-center pb-[44px]">
        <Image src={Logo} alt="볼링 로고" width={100} height={100} />
        <h1 className="text-[60px] text-transparent bg-clip-text bg-thunder">번개볼링</h1>
      </div>

      <div>
        {/* 이메일 입력란 */}
        <InputBox
          inputs={[
            {
              type: "email",
              placeholder: "이메일",
              className: "w-full py-2 px-3 rounded-lg border border-gray-400",
              validate: validateEmail,
            },
            {
              type: "text",
              placeholder: "닉네임",
              className: "w-full py-2 px-3 rounded-lg border border-gray-400",
              validate: validateName,
            },
            {
              type: "password",
              placeholder: "비밀번호",
              className: "w-full py-2 px-3 rounded-lg border border-gray-400",
              validate: validatePassword,
            },
            {
              type: "password",
              placeholder: "비밀번호 확인",
              className: "w-full py-2 px-3 rounded-lg border border-gray-400",
            },
          ]}
        />
      </div>
      {/* 지역 선택 */}
      <DropdownBox />

      <p className="pb-[32px]" />
      {/* 개인 정보 수집 및 이용 동의 체크박스 */}
      <div className="mb-4">
        <ConsentCheckbox checked={consentChecked} onChange={(isChecked) => setConsentChecked(isChecked)} />
      </div>
      <p className="pb-[32px]" />
      {/* 제출 버튼 */}
      <div className="flex justify-center ">
        <Button styleType="thunder">회원가입</Button>
      </div>
    </div>
  );
}

export default SignupHome;
