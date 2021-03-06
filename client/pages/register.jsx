import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/user';
import MyAlert from '../components/alert/alert';
function Register() {

    const dispatch = useDispatch();
    const { userInfo } = useSelector(state => state.userRegister);

    const [state, usestate] = useState({
        nama: '',
        email: '',
        password: '',
    });

    const handleInput = (e) => {
        const {name, value} = e.target;

        usestate({
            ...state,
            [name]: value
    })};

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(state.nama, state.email, state.password))
        if(userInfo){
            if(userInfo.data.success){
                alert('Berhasil')
                router.push('/login')
            }
        }
    };
    
    useEffect(() => {
        if(userInfo){
            if(userInfo.data.success){
                router.push('/login')
            }
        }
    }, [userInfo]);

    const router = useRouter();

    return (
        <div className="flex w-screen h-screen">
            <MyAlert />
            <div className="md:ml-36 ml-12 mt-12 w-full">
                <div className="">
                    <p className="text-2xl text-gray-600">Registrasi</p>
                    <p className= "text-4xl font-bold text-green-400">Para Surveyer!</p>
                </div>
                <form onSubmit={ e => handleSubmit(e) } className="mt-10">
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Nama<span className="text-red-600">*</span></label>
                        <input placeholder='Your Name or Nickname' onChange={(e)=>{handleInput(e)}} name="nama" type="text" className="text-gray-600 my-2 border p-5 h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Email <span className="text-red-600">*</span></label>
                        <input placeholder='youremail@email.com'  onChange={(e)=>handleInput(e)} name="email" type="email"  className="text-gray-600 my-2 border p-5 h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                    <div className="flex flex-col my-2">
                        <label className="text-gray-600">Password <span  className="text-red-600">*</span></label>
                        <input placeholder='Your password' type="password" name="password" onChange={(e)=>{handleInput(e)}} className="text-gray-600 p-5 my-2 border h-12 w-10/12 border-gray-300 rounded-md"></input>
                    </div>
                 
                    <div className="my-8 flex justify-between  w-10/12">
                        <button className="bg-green-400 p-2 w-32 rounded-3xl text-white">Daftar</button>
                        <p className="text-gray-500"></p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Sudah punya akun?
                        <span onClick={()=>{router.push('/login')}} className="text-gray-600 font-medium cursor-pointer"> Klik disini</span></p>
                    </div>
                </form>
            </div>
            <div className="w-full md:block hidden bg-gray-100 bg-bps_login bg-center bg-cover"></div>
        </div>
    )
}

export default Register
