import React, { useState } from "react";
import { Bars3Icon, UserIcon } from "@heroicons/react/24/solid";
import logo from "../media/svg-icons/logoIcon.svg";
import userIcon from "../media/svg-icons/userIcon.svg";
import cartIcon from "../media/svg-icons/cartIcon.svg";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import ModalFeedback from "./ModalFeedback";

export default function Header() {
  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(false);
  const [isModalFeedbackActive, setIsModalFeedbackActive] = useState<boolean>(false)

  return (
    <div className="px-[20px] py-[16px] w-full z-50 bg-white flex fixed justify-between items-center gap-4">
      {isModalFeedbackActive && <ModalFeedback active={isModalFeedbackActive} setActive={setIsModalFeedbackActive}/>}
      
      <Sidebar
          isSidebarOpened={isSidebarOpened}
          setIsSidebarOpened={setIsSidebarOpened}
          setIsModalFeedbackActive={setIsModalFeedbackActive}
        />
      <Bars3Icon
        className="min-w-[30px] max-w-[35px] z-[-1] hover:cursor-pointer sl:hidden"
        onClick={() => {
          setIsSidebarOpened(true);
        }}
      />
      <Link to={"/"}>
        <img src={logo} alt="" className="w-[120px] hover:cursor-pointer" />
      </Link>

      <div className="max-w-[615px] w-full font-medium hidden sl:block">
        <ul className="flex justify-between max-w-[615px] text-[18px]">
          <li><Link to={"/"}>Главная</Link></li>
          <li><Link to={"/products"}>Товары</Link></li>
          <li><Link to={"/about"}>О нас</Link></li>
          <li onClick={()=>setIsModalFeedbackActive(true)} className="hover:cursor-pointer">Обратная связь</li>
        </ul>
      </div>

      <div className="flex gap-5">
        <Link to={"/cart"}><img src={cartIcon} alt="" className="min-w-[25px] hover:cursor-pointer"/></Link>
        <Link to={"/profile"}><img src={userIcon} alt="" className="min-w-[25px] hover:cursor-pointer"/></Link>
      </div>
    </div>
  );
}
