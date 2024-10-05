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
            alert("Account created successfully !")
            window.location.reload()
        }
    }

    const handleSignIn = () => {
        if (username.current.value == localUsername && password.current.value == localPassword) {
            localStorage.setItem("signUp", username.current.value)
            window.location.reload()
        } else {
            alert("Wrong username or password !")
        }
    }

    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            {showHome ? <QuizApp /> :
                (show ?
                    <div className='flex flex-col p-24 w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-center font-poppins text-white items-center'>
                        <div className='text-[10vh] font-nunito font-bold'>
                            It's Qui<span className='text-[#7EC5DB]'>zz</span>os
                        </div>
                        <h1 className='pt-5 font-medium text-[3vh]'>{localName}</h1>
                        <div className='pt-5 flex flex-col gap-6 w-[70%] items-center'>
                            <div className='w-[40%]'>
                                <input type="username" class="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none" placeholder="Username" ref={username} />
                            </div>
                            <div className='w-[40%]'>
                                <input type="password" class="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none" placeholder="Password" ref={password} />
                            </div>
                            <div className='w-[40%] justify-between flex mt-[4vh]'>
                                <button onClick={handleSignIn} className='w-[30%] p-4 bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l'>Sign In</button>
                                <button onClick={deleteAccount} className='w-[60%] p-4 bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l'>Other Account</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col p-24 w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-center font-poppins text-white items-center'>
                        <div className='text-[10vh] font-nunito font-bold'>
                            It's Qui<span className='text-[#7EC5DB]'>zz</span>os
                        </div>
                        <div className='pt-9 flex flex-col gap-6 w-[70%] items-center'>
                            <div className='w-[40%]'>
                                <input type="name" class="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none " placeholder="Insert Name" ref={name} />
                            </div>
                            <div className='w-[40%]'>
                                <input type="username" class="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none" placeholder="Insert Username" ref={username} />
                            </div>
                            <div className='w-[40%]'>
                                <input type="password" class="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none" placeholder="Insert Password" ref={password} />
                            </div>
                            <button className='mt-[5vh] w-[40%] p-4 bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l' onClick={handleSignUp}>Sign Up</button>
                        </div>
                    </div>)}
        </div>

    )
}

export default SignUpSignIn
