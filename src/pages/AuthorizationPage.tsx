import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import logo from "../media/svg-icons/logoIcon.svg";
import { useForm } from 'react-hook-form';
import { toastParams } from '../service/toastifyParams';


export default function AuthorizationPage() {

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }} = useForm();

  function formSubmit(data:any){
    toast.error("Проверьте введенные данные", toastParams)
  }
  
  return (
    <div className=''>
      <ToastContainer />

      <form onSubmit={handleSubmit((data:any) => formSubmit(data))} className='flex flex-col max-w-[900px] items-center mt-[125px] px-5 gap-3 mx-auto'>
        <Link className='' to={'/'}>
          <div className="w-15 mx-auto mb-16">
            <img src={logo} alt="" />
          </div>
        </Link>
        <h1 className='w-fit font-medium text-[35px] mb-5'>Авторизация</h1>

        <input {...register('email',{ required: true })} type="email" placeholder='E-mail'  className="w-full max-w-[600px] py-[15px] px-[17px] font-light border-[1px] border-[#767676] rounded-[7px]" maxLength={100}  />
        {errors.email && <p className='w-full text-left text-[14px] text-red-500'>Поле обязательно к заполнению</p>}       
        <input {...register('password',{ required: true })} type="password" placeholder='Пароль'  className="w-full max-w-[600px] py-[15px] px-[17px] font-light border-[1px] border-[#767676] rounded-[7px]" maxLength={100} />
        {errors.password && <p className='w-full text-left text-[14px] text-red-500'>Поле обязательно к заполнению</p>}

        <button className="mx-auto mt-[45px] max-w-[280px] h-[65px] rounded-[10px] text-[20px] w-full bg-black text-white">
          Войти
        </button>
        
        <div className='flex gap-[5px]'>
          <span className='font-light'>Нет созданного профиля?</span>
          <span className='font-light'><span onClick={() => { navigate('/sign-up') }} className='underline hover:cursor-pointer'>Зарегистрироваться</span></span>
        </div>
      </form>

    </div>
  )
}
