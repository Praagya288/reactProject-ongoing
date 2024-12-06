import React, { useState } from 'react'

const Login = () => {

  const[email , setEmail] = useState("") ;
  const[password , setPassword] = useState("") ;


  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("email is " , email)
    console.log("passowrd is " , password)

    setEmail("")
    setPassword("")
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center' >
        <div className='border-2 rounded-xl border-emerald-600 p-20 ' >
            <form

            onSubmit={(e)=>{
              submitHandler(e) 
            }}
           
            className='flex flex-col items-center justify-center ' >

            
                <input
                value={email}
                onChange={(e)=>{
                  setEmail(e.target.value)
                }}
                type="email"
                placeholder = "Enter email" 
                required
                className='outline-none bg-transparent border-2 border-emerald-600  py-3 text-xl px-5 rounded-full placeholder:text-gray-400 '  />
                <input 
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                required
                type="password" placeholder="Enter password"
                className=' outline-none bg-transparent border-2 border-emerald-600  py-3 text-xl px-5 rounded-full  placeholder:text-gray-400 mt-3 '  />
                
                <button
                className= ' mt-5 mt text-white outline-none border-none border-2 bg-emerald-600  py-3 text-xl px-5 rounded-full  placeholder:text-white mt-3 '
                >Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login
