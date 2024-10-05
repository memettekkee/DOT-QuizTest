import React, { useEffect, useState, useRef } from 'react'
import Home from './Home'
import QuizApp from './quiz/QuizApp'

function SignUpSignIn() {

    const name = useRef()
    const username = useRef()
    const password = useRef()

    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)

    const localSignUp = localStorage.getItem("signUp")
    const localName = localStorage.getItem("name")
    const localUsername = localStorage.getItem("username")
    const localPassword = localStorage.getItem("password")

    useEffect(() => {
        if (localSignUp) {
            setShowHome(true)
        }
        if (localUsername) {
            setShow(true)
        }
    })

    const handleSignUp = () => {
        if (name.current.value && username.current.value && password.current.value) {
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("username", username.current.value)
            localStorage.setItem("password", password.current.value)
            localStorage.setItem("signUp", username.current.value)
            alert("Akun telah dibuat :)")
            window.location.reload()
        }
    }

    const handleSignIn = () => {
        if (username.current.value == localUsername && password.current.value == localPassword) {
            localStorage.setItem("signUp", username.current.value)
            window.location.reload()
        } else {
            alert("Username atau Password salah!!!")
        }
    }

    return (
        <div>
            {showHome ? <QuizApp /> :
                (show ?
                    <div className=''>
                        <div className=''>
                            Quiz Test
                        </div>
                        <h1>
                            Haiii, {localName}
                        </h1>
                        <div className=''>
                            <label class="">Username</label>
                            <input type="username" class="" placeholder="Username" ref={username} />
                        </div>
                        <div className=' '>
                            <label class="">Password</label>
                            <input type="password" class="" placeholder="Password" ref={password} />
                        </div>
                        <button onClick={handleSignIn}>Sign In</button>
                    </div>
                    :
                    <div className='container'>
                        <div className=''>
                            Quiz Test
                        </div>
                        <div className=''>
                            <label class="">Nama</label>
                            <input type="name" class="" placeholder="Nama" ref={name} />
                        </div>
                        <div className=''>
                            <label class="">Username</label>
                            <input type="username" class="" placeholder="Username" ref={username} />
                        </div>
                        <div className=' '>
                            <label class="">Password</label>
                            <input type="password" class="" placeholder="Password" ref={password} />
                        </div>
                        <button onClick={handleSignUp}>Sign Up</button>
                    </div>)}
        </div>

    )
}

export default SignUpSignIn
