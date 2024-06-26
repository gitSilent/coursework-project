import React from "react";
import logo from "../media/svg-icons/logo-whiteIcon.svg";
import vkLogo from "../media/svg-icons/vk-whiteLogo.svg";
import tgLogo from "../media/svg-icons/tg-whiteLogo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="absolute rounded-tl-[45px] rounded-tr-[45px] left-0 bottom-0 w-full p-[37px] bg-black flex flex-col">
      <div className="hidden mx-auto md:flex items-center gap-[40px] pb-[20px] border-b-[1px] border-[#767676] w-fit mb-[40px]">
        <span className="text-[23px] text-white font-semibold">info@softness.com</span>
        <button className="py-[12px] px-[30px] bg-[#efb279] rounded-full font-medium text-[17px] hover:bg-[#D89556]">Связаться с нами</button>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col gap-[50px] md:flex-row md:items-center md:w-[60%] md:justify-between">
          <img src={logo} alt="" className="w-[120px] hover:cursor-pointer" />
          <div className="flex flex-col text-white max-w-[455px] text-[20px] md:flex-row md:justify-between md:w-full">
            <Link to={"/"}>Главная</Link>
            <Link to={"/products"}>Товары</Link>
            <Link to={"/about"}>О нас</Link>
          </div>
        </div>
        <div className="flex gap-[35px]">
          <a href="#"><img src={vkLogo} alt="" className="w-[41px] hover:cursor-pointer" /></a>
          <a href="#"><img src={tgLogo} alt="" className="w-[41px] hover:cursor-pointer" /></a>
        </div>
      </div>
    </div>
  );
}
