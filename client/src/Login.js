import React, { useState, useEffect, useRef, createContext } from 'react';

function Login() {
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
      localStorage.setItem('user', user.user)
    //   console.log(user.user)
    }

    return (
        <div>
            <input ref={loginRef} type="text" id="username" name="username" placeholder="username"></input> <br></br>
            <input ref={passwordRef} type="text" id="password" name="password" placeholder="password"></input> <br></br>
            <button onClick={() => authenticate()}type="submit">LOGIN</button> 
        </div>
    )
}

function logout() {

}

function Register() {
    const [status, setStatus] = useState()
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
        setStatus(status.status)
    }

    return (
        <div>
            <input ref={userRef} type="text" id="username" name="usernameRegister" placeholder="usernameR"></input> <br></br>
            <input ref={pwRef} type="text" id="password" name="passwordRegister" placeholder="password"></input> <br></br>
            <button onClick={() => registry()}type="submit">REGISTER</button> 
            <p>{status}</p> <br></br>
        </div>
    )
}

export {
    Login,
    Register
}