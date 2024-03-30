import React from 'react'
import product from '../media/product_card.jpg'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastParams } from '../service/toastifyParams';
import { IProductCard } from '../api/models';

export default function ProductCard({id,photos,price,title}:IProductCard) {

  const idproduct = 1 

  function handleClickCart(){
    toast.success("Товар добавлен в корзину", toastParams)
  }
  return (
    <div className='flex flex-col max-w-[320px] max-h-[440px] rounded-tl-[25px] rounded-tr-[25px] overflow-hidden hover:cursor-pointer'>
      <ToastContainer />
      <Link to={`/product/${idproduct}`} className='flex flex-col'>
        <img src={product} alt="" className='' />
        <span className='text-[20px] font-normal sl:text-[24px]'>Плюшевый медведь</span>
        <span className='text-[23px] font-medium sl:text-[29px]'>2500 Р</span>
      </Link>
        <button onClick={handleClickCart} className='rounded-[20px] w-full h-[35px] text-center border-2 border-[#565656]  text-[#565656] text-[15px] sl:h-[55px] sl:text-[20px] hover:bg-gray-300'>В корзину</button>
    </div>
  )
}
