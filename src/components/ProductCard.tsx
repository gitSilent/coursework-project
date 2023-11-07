import React from 'react'
import product from '../media/product_card.jpg'

export default function ProductCard() {
  return (
    <div className='flex flex-col w-[45%] max-w-[300px] max-h-[440px] rounded-tl-[25px] rounded-tr-[25px] overflow-hidden hover:cursor-pointer'>
      <img src={product} alt="" className='' />
      <span className='text-[18px] font-normal sl:text-[24px]'>Плюшевый медведь</span>
      <span className='text-[21px] font-medium sl:text-[29px]'>2500 Р</span>
        <button className='rounded-[20px] w-full h-[35px] text-center border-2 border-[#565656]  text-[#565656] text-[15px] sl:h-[55px] sl:text-[20px] hover:bg-gray-300'>В корзину</button>
    </div>
  )
}
