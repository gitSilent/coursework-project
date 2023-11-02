import { Bars3Icon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  isSidebarOpened: boolean;
  setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({
  isSidebarOpened,
  setIsSidebarOpened,
}: IProps) {
  return (
    <div
      className={`fixed top-0 left-0 z-80 h-full w-[70vw] bg-gray-700 ease-in-out duration-300 ${
        isSidebarOpened ? "translate-x-0 " : "-translate-x-full"
      }`}
    >
      <Bars3Icon
        color="white"
        className="w-[35px] ml-[25px] mt-[22px] mb-5 hover:cursor-pointer"
        onClick={() => {
          setIsSidebarOpened(false);
        }}
      />

      <ul>
        <li className="px-3 py-5 text-2xl text-white pl-[25px] hover:bg-slate-600 hover:cursor-pointer duration-100">
          <Link to={"/"}>Главная</Link>
        </li>
        <hr className="bg-black h-[1px]" />
        <li className="px-3 py-5 text-2xl text-white pl-[25px] hover:bg-slate-600 hover:cursor-pointer duration-100">
          <Link to={"/products"}>Товары</Link>
        </li>
        <hr className="bg-black h-[1px]" />
        <li className="px-3 py-5 text-2xl text-white pl-[25px] hover:bg-slate-600 hover:cursor-pointer duration-100">
          <Link to={"/about"}>О нас</Link>
        </li>
        <hr className="bg-black h-[1px]" />
        <li className="px-3 py-5 text-2xl text-white pl-[25px] hover:bg-slate-600 hover:cursor-pointer duration-100">
          <Link to={"/feedback"}>Обратная связь</Link>
        </li>
      </ul>
    </div>
  );
}
