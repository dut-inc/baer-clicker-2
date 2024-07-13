import React, { useState, useEffect, useRef, createContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [status, setStatus] = useState('')
    const navigate = useNavigate();
    const loginRef = useRef('')
    const passwordRef = useRef('')

    const authenticate = async () => {
        const response = await fetch('http://localhost:3001/login', {
            method: "post",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: loginRef.current.value, 
                password: passwordRef.current.value })
        })
        if (response.statusText !== "Unauthorized") {
            const user = await response.json()
            localStorage.setItem('user', user.user)
            navigate("/")
        } else {
            setStatus("LOGIN FAILED")
        }
    }

    const navRegister = () => {
        navigate("/register")
    }

    return (<>
        <div className="flex overscroll-none w-screen h-screen bg-[url('./assets/loginBackground.gif')] bg-cover">
            <div className="flex flex-col text-textalt px-10 py-6 w-[30%] h-[screen] object-center justify-center items-center bg-[rgba(43,43,43,0.6)]">
                <div>placeholder - baer clicker logo</div>
                <div className="mr-auto mt-auto my-4 font-default text-4xl">Sign in</div>
                <input className="w-full p-2 font-default hover:bg-[#000000]/80 focus:bg-[#000000]/80 focus:outline-none bg-[rgba(0,0,0,0.6)]" ref={loginRef} type="text" id="username" name="username" placeholder="Username"></input> <br></br>
                <input className="w-full p-2 font-default hover:bg-[#000000]/80 focus:bg-[#000000]/80 focus:outline-none bg-[rgba(0,0,0,0.6)]" ref={passwordRef} type="password" id="password" name="password" placeholder="Password"></input> <br></br>
                <button className="p-2 font-default w-[30%] hover:bg-[#000000]/80 bg-[#000000]/50" onClick={() => authenticate()}type="submit">Log In</button>
                <div className="mt-auto flex flex-row w-[100%]">
                    <button className="w-[50%] p-2 text-center mr-8 font-default hover:bg-[#000000]/80 bg-[#000000]/50" onClick={() => navRegister()}>
                    Sign up
                    </button>   
                    <button className="w-[50%] p-2 ml-auto text-center font-default hover:bg-[#000000]/80 bg-[#000000]/50">
                    Forgot Password?
                    </button>
                </div>
                <p>{status}</p>
            </div>
        </div>
        </>
    )
}

function logout() {

}

function Register() {
    const [status, setStatus] = useState()
    const navigate = useNavigate();
    const userRef = useRef('')
    const pwRef = useRef('')

    const registry = async () => {
        const response = await fetch('http://localhost:3001/register', {
            method: "post",
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                username: userRef.current.value, 
                password: pwRef.current.value })
        })

        const status = await response.json()
        if (status.status) {
            navigate("/login")
        } else {
            setStatus("REGISTER FAILED")
        }
    }

    const navLogin = () => {
        navigate("/login")
    }

    return (<>
        <div>
            <button onClick={() => navLogin()}>
            <h2 className="font-header text-3xl shadow p-3 rounded-lg">LOGIN BUTTON</h2>
            </button>
            <div class="flex justify-center">
                <h2 class="font-header text-7xl">Register New user</h2>
            </div>
        </div>
        <div class="grid grid-rows-2 p-20 gap-3">
            <input class="p-3 bg-white shadow rounded-lg" ref={userRef} type="text" id="username" name="usernameRegister" placeholder="username"></input>
            <input class="p-3 bg-white shadow rounded-lg" ref={pwRef} type="text" id="password" name="passwordRegister" placeholder="password"></input>
            <div class="flex justify-center">
                <button class="p-3 bg-white shadow w-1/5 rounded-lg" onClick={() => registry()}type="submit">
                REGISTER
                </button> 
            </div>
            <p>{status}</p> <br></br>
        </div>
        </>
    )
}

export {
    Login,
    Register
}