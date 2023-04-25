
import { useAppDispatch } from 'app/hooks'
import { useFormik } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom'
import { userLogin } from 'reducers/userSlice'
import { LoginType } from 'type/userType'






type Props = {}

export const Login = (props: Props) => {
 

    const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            passWord: '',
        }, 
        onSubmit(values:LoginType ) {
            console.log(values)
          dispatch(userLogin(values))
        }
    });





    return (
    
        <div className='flex items-center justify-center h-[100vh] bg-slate-700'>
            <div className='w-[30%]'>
                <div className='flex items-center border border-solid rounded-2xl '>
                    <img className='w-[100px]' src={require('../../assets/Jira-Emblem-removebg-preview.png')} alt="logo" />
                    <h2 className='text-2xl font-semibold'>Jira-SS</h2>
                </div>

                <form
                onSubmit={formik.handleSubmit}
                className=' p-10 border border-solid border-gray-800 rounded-md mt-10 bg-[#808080c7]'>
                    <h2 className='text-xl font-semibold'>Sign in to Your Account</h2>
                    <h3>Your Email</h3>
                    <input 
                    onChange={formik.handleChange}
                    name='email'
                    className='w-full border border-solid border-orange-500 rounded-md text-lg py-1 px-2 outline-none focus:border-green-700 focus:border-2' type="email" />
                    <h3>Pass Word</h3>
                    <input
                    onChange={formik.handleChange}
                    name='passWord'
                    className='w-full border border-solid border-orange-500 rounded-md text-lg py-1 px-2 outline-none focus:border-green-700 focus:border-2' type="password" />
                    <div className='flex items-center justify-between'>
                        <div  className='flex items-center justify-start gap-3 py-4'>
                            <input type="checkbox" name="" id="" />
                            <p>Remember Me</p>
                        </div>
                        <div>Forgot Password </div>

                    </div>
                    <button className='py-4 w-full hover:bg-orange-700 transition-all duration-500 hover:text-white bg-orange-400 rounded-md ' type='submit'>Sign in </button>
                    <p>Don't have account yet ?   <Link to="/">Sign Up</Link></p>


                </form>

            </div>
        </div>
    )
}

export default Login