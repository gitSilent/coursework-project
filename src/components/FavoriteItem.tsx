import ex from '../media/svg-icons/ex.svg'
import product from '../media/product_card.jpg'
import { Link } from 'react-router-dom'

export default function FavoriteItem() {
  const idproduct = 1;
  
  return (
    <div className='relative flex flex-col min-w-[210px] max-w-[210px] md:max-w-[260px] max-h-[440px] rounded-tl-[25px] rounded-tr-[25px] overflow-hidden hover:cursor-pointer'>
      <img src={ex} alt="" className='absolute w-[20px] h-[20px] top-[20px] right-[20px] hover:cursor-pointer'/>
      <Link to={`/product/${idproduct}`} className='flex flex-col'>
        <img src={product} alt="" className='' />
        <span className='text-[16px] font-normal sl:text-[20px]'>Плюшевый медведь</span>
        <span className='text-[20px] font-medium sl:text-[23px]'>2500 Р</span>
      </Link>
    </div>
  )
}
