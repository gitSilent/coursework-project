import React, { useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OrderItem from "../components/OrderItem";
import FavoriteItem from "../components/FavoriteItem";
import { useDraggable } from "react-use-draggable-scroll";

export default function Profile() {
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref); 
  
  return (
    <div className="relative min-h-full">
      <Header />
      <main className="flex flex-col m-auto pb-[280px] pt-[90px] px-[20px] max-w-[1400px]">
        <section className="flex flex-col md:flex-row gap-[30px]">
          <div className="w-full max-w-[570px]">
            <h2 className="text-[30px] mb-[45px]">Личные данные</h2>

            <div className="flex justify-between w-full mb-[20px] gap-[20px] items-center">
              <span>Имя пользователя</span>
              <input type="text" disabled value={'username'} className="w-full max-w-[400px] py-[15px] px-[17px] font-light border-[1px] border-[#767676] rounded-[7px]" />
            </div>

            <div className="flex justify-between w-full gap-[20px] items-center">
              <span className="whitespace-nowrap">E-mail</span>
              <input type="text" disabled value={'emailaddress@mail.ru'} className="w-full max-w-[400px] py-[15px] px-[17px] font-light border-[1px] border-[#767676] rounded-[7px]" />
            </div>
          </div>

          <div className="w-full">
            <h2 className="text-[30px] mb-[45px]">Мои заказы</h2>
            <div className="flex flex-col gap-[15px] max-h-[400px] overflow-y-auto p-[1px]">
              <OrderItem />
              <OrderItem />
              <OrderItem />
            </div>
          </div>
        </section>

        <section className="mt-[80px]">
          <h2 className="text-[30px] mb-[45px]">Избранное</h2>
          <div className="flex gap-[20px] overflow-x-auto w-full" {...events} ref={ref}>
            <FavoriteItem />
            <FavoriteItem />
            <FavoriteItem />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
