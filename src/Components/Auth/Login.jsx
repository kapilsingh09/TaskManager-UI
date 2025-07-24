import React, { useState } from 'react'

const Login = ({ handleLogin  }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center '>
            <div className='border-2 border-green-400'>
                <form onSubmit={submitHandler} className='flex flex-col justify-center items-center p-20 '>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='border-2 outline-none bg-transparent placeholder:text-white border-green-500 text-xl rounded-2xl py-4 px-3'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='border-2 outline-none bg-transparent placeholder:text-white mt-10 border-green-500 text-xl rounded-2xl py-4 px-3'
                        type="password"
                        placeholder='Enter your password'
                    />
                    <button type="submit" className='text-white mt-9 bg-green-400 border-none rounded-2xl p-3 px-26'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
