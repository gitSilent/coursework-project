
export default function OrderItem() {
  return (
    <div className='relative flex justify-between items-center w-full max-w-[515px] p-[25px] rounded-[10px] block-shadow'>
        <div className="flex flex-col gap-[10px]">
            <span className="font-medium">Заказ №000001</span>
            <span className="font-normal">Статус: <span className="underline text-[#E3A164]">в обработке</span></span>
        </div>
        <span className="block">1 500 р.</span>
    </div>
  )
}
