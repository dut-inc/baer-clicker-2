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
      const user = await response.json()

      if (user.user) {
        localStorage.setItem('user', user.user)
        navigate("/")
      } else {
        setStatus("LOGIN FAILED")
      }
    //   console.log(user.user)
    }

    const navRegister = () => {
        navigate("/register")
    }
    
    return (<>
        <div>
            <button onClick={() => navRegister()}>
                REGISTER
            </button>
        </div>
        <div>
            <input ref={loginRef} type="text" id="username" name="username" placeholder="username"></input> <br></br>
            <input ref={passwordRef} type="text" id="password" name="password" placeholder="password"></input> <br></br>
            <button onClick={() => authenticate()}type="submit">LOGIN</button> 
            <p>{status}</p>
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
                LOGIN
            </button>
        </div>
        <div>
            <input ref={userRef} type="text" id="username" name="usernameRegister" placeholder="username"></input> <br></br>
            <input ref={pwRef} type="text" id="password" name="passwordRegister" placeholder="password"></input> <br></br>
            <button onClick={() => registry()}type="submit">REGISTER</button> 
            <p>{status}</p> <br></br>
        </div>
        </>
    )
}

export {
    Login,
    Register
}