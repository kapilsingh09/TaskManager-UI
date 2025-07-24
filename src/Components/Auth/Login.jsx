import React, { useState } from 'react';

const Login = ({ handleLogin, error,clearError }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-900 to-gray-800">
            <div className="backdrop-blur-lg bg-white/5 border border-green-500/30 shadow-2xl rounded-3xl p-10 w-full max-w-md">
                <h2 className="text-3xl font-semibold text-white/50 text-center mb-6">Login to Your Account</h2>


                <form onSubmit={submitHandler} className="flex flex-col gap-6">
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="px-4 py-3 rounded-xl bg-black/30 border border-green-400/30 placeholder-green-300 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 rounded-xl bg-black/30 border border-green-400/30 placeholder-green-300 text-green-100 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <button
                        type="submit"
                        className="bg-green-500 hover:cursor-pointer hover:bg-green-600 text-black py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                        Login
                    </button>
                </form>

                <p className="text-sm text-green-200 mt-6 text-center">
                    Don't have an account? <a href="#" className="underline hover:text-green-400">Sign Up</a>
                </p>
                {error && (
                    <div className="mt-4 text-red-400 bg-red-900/30 border border-red-500/30 px-4 py-3 rounded-xl text-sm relative text-center">
                        <button
                            className="absolute right-2 top-1  h-9 w-10  cursor-pointer bg-white rounded-4xl text-red-300 hover:text-red-500 transition-colors duration-200 font-bold text-lg"
                            onClick={() => {clearError()}}
                        >
                            ✕
                        </button>
                        {error} mew
                    </div>
                )}

                
            </div>
        </div>
    );
};

export default Login;