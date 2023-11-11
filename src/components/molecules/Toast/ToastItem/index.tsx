"use client";

import { ToastData } from "@/types/toast";
import React, { useEffect, useState } from "react";
import toastState from "@/stores/atoms/toastState";
import { useSetRecoilState } from "recoil";

interface Props {
  toastData: ToastData;
  backgroundColor: string;
  icon: React.ReactNode;
}

function ToastItem({ toastData, backgroundColor, icon }: Props): JSX.Element {
  const { id, message } = toastData;
  const [visible, setVisible] = useState(false);

  const setToastList = useSetRecoilState(toastState);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setToastList((prev: ToastData[]) => {
          return prev.filter((item: ToastData) => item.id !== id);
        });
      }, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`flex items-center w-[320px] h-[60px] pl-3 rounded-md text-white ${backgroundColor} shadow-sm 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"} transition-all duration-300 
      md:w-[240px] md:h-[45px] md:text-sm`}
    >
      <div className="mr-4 md:mr-2">{icon}</div>
      {message}
    </div>
  );
}

export default ToastItem;
