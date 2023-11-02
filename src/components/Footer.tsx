import React from "react";
import logo from "../media/svg-icons/logo-whiteIcon.svg";
import vkLogo from "../media/svg-icons/vk-whiteLogo.svg";
import tgLogo from "../media/svg-icons/tg-whiteLogo.svg";

export default function Footer() {
  return (
    <div className="absolute left-0 bottom-0 w-full h-[280px] p-[37px] bg-black flex flex-row justify-between">
      <div className="flex flex-col gap-[20px]">
        <img src={logo} alt="" className="w-[120px] hover:cursor-pointer" />
        <div className="flex flex-col text-white text-[20px]">
          <span>Контакты</span>
          <span>О нас</span>
          <span>Документы</span>
        </div>
      </div>
      <div className="flex gap-[35px]">
        <img src={vkLogo} alt="" className="w-[41px] hover:cursor-pointer" />
        <img src={tgLogo} alt="" className="w-[41px] hover:cursor-pointer" />
      </div>
    </div>
  );
}
