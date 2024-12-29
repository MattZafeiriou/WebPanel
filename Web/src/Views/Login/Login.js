import React, { useEffect } from 'react';
import { makeUnauthenticatedPostRequest } from '../Utils/Connection/FetchRequest.js';

function Login() {
    async function submitForm(e) {
        e.preventDefault();
        const form = document.getElementById('loginform');
        const data = new FormData(form);
        const username = data.get('username');
        const password = data.get('password');
        const output = await makeUnauthenticatedPostRequest('/login', { username, password });

        if (output.status === 200) {
            window.location.href = '/dashboard';
        } else {
            alert('Invalid credentials');
        }
    }

    useEffect(() => {
        document.getElementById('loginbutton').addEventListener('click', submitForm);
    }, []);
    return (
        <div className='flex flex-row w-screen h-screen bg-gradient-to-tr from-emerald-300 to-purple-500'>
            <div className='w-full h-full justify-center items-center flex'>
                <div className='bg-neutral-900/90 rounded p-4 text-white select-none w-96 mb-40 shadow-xl'>
                    <h1 className='text-4xl font-bold'>Login</h1>
                    <br />
                    <form id='loginform' className='flex flex-col gap-2'>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="username">Username<span className="text-red-500">*</span></label>
                            <input className="text-black px-0.5" type="text" id="username" name="username" placeholder="John Doe" required />
                            <label htmlFor="password">Password<span className="text-red-500">*</span></label>
                            <input className="text-black px-0.5" type="password" id="password" name="password" placeholder="******" required />
                            <button type="submit" className='btn btn-primary mt-5' id="loginbutton">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="absolute bottom-0 right-0 p-2 text-white">
                <h2 className="text-s">MVP version 0.1</h2>
            </div>
            <div className="absolute bottom-0 left-0 p-2 text-white">
                <h2 className="text-s">Restricted Access</h2>
                <h3 className="text-xs">Copyright 2024</h3>
            </div>
        </div>
    );
}

export default Login;