import React, { useState } from "react";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/solid";
import logo from "../media/svg-icons/logoIcon.svg";
import userIcon from "../media/svg-icons/userIcon.svg";
import cartIcon from "../media/svg-icons/cartIcon.svg";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export default function Header() {
  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(false);
  return (
    <div className="px-[25px] py-[16px] flex justify-between items-center gap-10">
      <Sidebar
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
        />
      <Bars3Icon
        className="w-[35px] z-90 hover:cursor-pointer sl:hidden"
        onClick={() => {
          setIsSidebarOpened(true);
        }}
      />
      <img src={logo} alt="" className="w-[120px] hover:cursor-pointer" />
      <div className="max-w-[615px] w-full font-medium hidden sl:block">
        <ul className="flex justify-between max-w-[615px] text-[18px]">
          <li><Link to={"/"}>Главная</Link></li>
          <li><Link to={"/"}>Товары</Link></li>
          <li><Link to={"/"}>О нас</Link></li>
          <li><Link to={"/"}>Обратная связь</Link></li>
         
        </ul>
      </div>
      <div className="flex gap-5">
        <img src={cartIcon} alt="" className="hover:cursor-pointer"/>
        <img src={userIcon} alt="" className="hover:cursor-pointer"/>
      </div>
    </div>
  );
}
