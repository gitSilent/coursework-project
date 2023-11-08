import React, { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import product from "../media/product_card.jpg";
import cartIcon from "../media/svg-icons/cartIcon.svg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./bigSwiperStyles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Footer from "../components/Footer";
import Header from "../components/Header";
export default function ProductPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <div className="relative min-h-full">
      <Header />
      <main className="flex flex-col items-center z-[1] m-auto pb-[400px] pt-[90px] px-[20px] max-w-[1400px]">
        <div className="max-w-[500px] max-h-[1000px] w-full z-[1] ">
          <Swiper
            style={{}}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide className="rounded-[35px]">
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="rounded-[35px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="rounded-[35px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="rounded-[35px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" className="rounded-[35px]" />
            </SwiperSlide>
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-7.jpg" className="rounded-[15px] " />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-8.jpg" className="rounded-[15px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-9.jpg" className="rounded-[15px]" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-10.jpg" className="rounded-[15px]" />
            </SwiperSlide>
            
          </Swiper>

          <div>
            <div>
              <h2>Плюшевый медведь</h2>
              <span>2500 Р</span>
            </div>
            <div className="flex gap-[25px]">
              <button className="max-w-[180px]  rounded-[20px] text-[20px] w-full bg-black text-white">Купить</button>
              <button className="px-[24px] py-[24px] sl:px-[34px] sl:py-[24px] rounded-[20px] border-[2px] border-black text-[20px] bg-white text-black"><img src={cartIcon} alt="" className="w-[20px]" /></button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
