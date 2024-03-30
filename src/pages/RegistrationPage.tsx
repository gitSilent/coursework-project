import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import logo from "../media/svg-icons/logoIcon.svg";
import { useForm } from 'react-hook-form';
import { toastParams } from '../service/toastifyParams';


export default function RegistrationPage() {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm();

  function formSubmit(data:any){
    console.log(data);
    if(data.password !== data.repeat_password){
      toast.error("Пароли не совпадают", toastParams)
      return
    }
  }

  return (
    <div className=''>
      <ToastContainer />
      
      <form onSubmit={handleSubmit((data:any) => formSubmit(data))} className='flex flex-col max-w-[600px] items-center mt-[125px] px-5  mx-auto'>
        <Link className='' to={'/'}>
          <div className="w-15 mx-auto mb-16">
            <img src={logo} alt="" />
          </div>
        </Link>
        <h1 className='w-fit font-medium text-[35px] mb-5'>Регистрация</h1>

        <input {...register('username',{ required: true })}  type="text" placeholder='Имя пользователя'  className="w-full py-[15px] px-[17px] font-light border-[1px] border-[#767676] rounded-[7px]" maxLength={100}  />
        {errors.username && <p className='w-full text-left text-[14px] text-red-500'>Поле обязательно к заполнению</p>}
        <input {...register('email',{ required: true })}  type="email" placeholder='E-mail'  className="w-full mt-[15px] py-[15px] px-[17px] font-light border-[1px] border-[#767676] rounded-[7px]" maxLength={100}  />
        {errors.email && <p className='w-full text-left text-[14px] text-red-500'>Поле обязательно к заполнению</p>}
        <input {...register('password',{ required: true })}  type="password" placeholder='Пароль'  className="w-full mt-[15px] py-[15px] px-[17px] font-light border-[1px] border-[#767676] rounded-[7px]" maxLength={100} />
        {errors.password && <p className='w-full text-left text-[14px] text-red-500'>Поле обязательно к заполнению</p>}
        <input {...register('repeat_password',{ required: true })} type="password" placeholder='Повторите пароль'  className="w-full mt-[15px] py-[15px] px-[17px] font-light border-[1px] border-[#767676] rounded-[7px]" maxLength={100} />
        {errors.repeat_password && <p className='w-full text-left text-[14px] text-red-500'>Поле обязательно к заполнению</p>}
       
        <div className='w-full flex gap-[20px]'>
            <input type="checkbox" />
            <span className='underline font-light'>Согласие на обработку персональных данных</span>
        </div>

        <button type='submit' className="mx-auto mt-[45px] max-w-[280px] h-[65px] rounded-[10px] text-[20px] w-full bg-black text-white">
          Зарегистрироваться
        </button>
        
        <div className='flex gap-[5px]'>
          <span className='font-light'>Уже есть созданный профиль?</span>
          <span className='font-light'><span onClick={() => { navigate('/sign-in') }} className='underline hover:cursor-pointer'>Войти</span></span>
        </div>
      </form>

    </div>
  )
}
