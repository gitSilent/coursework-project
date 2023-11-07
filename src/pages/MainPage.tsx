import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import main_banner from '../media/main_banner.png'
import mobile_banner from '../media/mobile_banner.png'
import main_card1 from '../media/main_card1.png'
import main_card2 from '../media/main_card2.png'
import main_card3 from '../media/main_card3.png'
import leaf_icon from '../media/svg-icons/leaf_icon.svg'
import safely_icon from '../media/svg-icons/safely_icon.svg'
import heart_icon from '../media/svg-icons/heart_icon.svg'
import ProductCard from '../components/ProductCard'
import product from '../media/product_card.jpg'

export default function MainPage() {
  return (
    <div className='relative min-h-full'>
      <Header/>
      <main className='flex flex-col m-auto pb-[280px] pt-[90px] px-[20px] max-w-[1400px] '>
        <img src={main_banner} alt="" className='hidden sm:block'/>
        <img src={mobile_banner} alt="" className='sm:hidden'/>

        
        <div className='flex flex-wrap w-full justify-center'>
          <img src={main_card1} alt="" className='w-full max-w-[380px] sl:max-w-[450px]'/>
          <img src={main_card2} alt="" className='w-full max-w-[380px] sl:max-w-[450px]'/>
          <img src={main_card3} alt="" className='w-full max-w-[380px] sl:max-w-[450px]'/>
        </div>

        <div className='flex items-start m-auto w-fit flex-col gap-[20px] mt-[100px] mb-[100px] text-[18px] xm:flex-row'>
          <div className='flex flex-row items-center font-medium gap-[40px]'>
            <img src={leaf_icon} alt="" className='w-[120px]'/>
            <span>Гипоаллергенно</span>
          </div>
          <div className='flex flex-row items-center font-medium gap-[40px]'>
            <img src={safely_icon} alt="" className='w-[120px]'/>
            <span>Безопасно</span>
          </div>
          <div className='flex flex-row items-center font-medium gap-[40px]'>
            <img src={heart_icon} alt="" className='w-[120px]'/>
            <span>С душой</span>
          </div>
        </div>
        
        <section>
          <h2 className='m-auto w-fit text-[25px] uppercase font-semibold my-[50px] sl:text-[35px]'>Бестселлеры</h2>
          <div className='flex flex-wrap gap-[20px]'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </section>

        <section className='flex flex-col justify-center items-center mb-[100px]'>
          <h2 className='m-auto w-fit text-[25px] uppercase font-semibold my-[50px] sl:text-[35px]'>Наши работы</h2>
          <div className='flex flex-wrap gap-[10px] m-auto justify-start items-center sl:gap-[20px]'>
              <img src={product} alt="" className='rounded-[25px] w-[45%] max-w-[355px] max-h-[355px]'/>
              <img src={product} alt="" className='rounded-[25px] w-[45%] max-w-[355px] max-h-[355px]'/>
              <img src={product} alt="" className='rounded-[25px] w-[45%] max-w-[355px] max-h-[355px]'/>
              <img src={product} alt="" className='rounded-[25px] w-[45%] max-w-[355px] max-h-[355px]'/>
              <img src={product} alt="" className='rounded-[25px] w-[45%] max-w-[355px] max-h-[355px]'/>

          </div>
        </section>
      </main>
      <Footer/>
    </div>
  )
}
