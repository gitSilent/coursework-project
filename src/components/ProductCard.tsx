import React from 'react'
import product from '../media/product_card.jpg'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastParams } from '../service/toastifyParams';

export default function ProductCard() {

  const navigate = useNavigate();

  function handleClickProduct(){
    const idproduct = 1 
    navigate(`/product/${idproduct}`)
  }

  function handleClickCart(){
    console.log("add to cart");
    toast.success("Товар добавлен в корзину", toastParams)
  }
  return (
    <div className='flex flex-col w-[45%] max-w-[300px] max-h-[440px] rounded-tl-[25px] rounded-tr-[25px] overflow-hidden hover:cursor-pointer'>
       <ToastContainer />
      <div onClick={handleClickProduct} className='flex flex-col'>
        <img src={product} alt="" className='' />
        <span className='text-[18px] font-normal sl:text-[24px]'>Плюшевый медведь</span>
        <span className='text-[21px] font-medium sl:text-[29px]'>2500 Р</span>
      </div>
        <button onClick={handleClickCart} className='rounded-[20px] w-full h-[35px] text-center border-2 border-[#565656]  text-[#565656] text-[15px] sl:h-[55px] sl:text-[20px] hover:bg-gray-300'>В корзину</button>
    </div>
  )
}
