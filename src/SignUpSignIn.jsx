import React, { useEffect, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { BiShowAlt, BiHide } from 'react-icons/bi'
import QuizApp from './quiz/QuizApp'

function SignUpSignIn() {

    const name = useRef()
    const username = useRef()
    const password = useRef()

    const [showHome, setShowHome] = useState(false)
    const [show, setShow] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

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

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

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

    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <div>
            {showHome ? <QuizApp /> :
                (show ? (
                    <div className='flex flex-col p-6 sm:p-12 md:p-16 lg:p-24 w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-center font-poppins text-white items-center'>
                        <CSSTransition
                            in={inProp}
                            classNames="fade"
                            timeout={900}
                            unmountOnExit
                        >
                            <div className='text-[8vh] sm:text-[10vh] md:text-[12vh] font-nunito font-bold'>
                                It's Qui<span className='text-[#7EC5DB]'>zz</span>os
                            </div>
                        </CSSTransition>
                        <h1 className='pt-5 font-medium text-[2.5vh] sm:text-[3vh] md:text-[3.5vh]'>{localName}</h1>
                        <div className='pt-5 flex flex-col gap-6 w-full sm:w-[70%] items-center'>
                            <div className='w-full sm:w-[40%] md:w-[50%] lg:w-[40%]'>
                                <input
                                    type="username"
                                    className="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none"
                                    placeholder="Username"
                                    ref={username}
                                />
                            </div>
                            <div className="relative w-full sm:w-[40%] md:w-[50%] lg:w-[40%]">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none pr-10"
                                    placeholder="Password"
                                    ref={password}
                                />
                                <button
                                    type="button"
                                    className="absolute text-white transform -translate-y-1/2 right-3 top-1/2"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <BiShowAlt className="text-[3.5vh] md:text-[4vh]" /> : <BiHide className="text-[3.5vh] md:text-[4vh]" />}
                                </button>
                            </div>
                            <div className='w-full sm:w-[40%] justify-between flex mt-[4vh] flex-col md:flex-row'>
                                <button onClick={handleSignIn} className='w-full sm:w-[30%] mb-4 sm:mb-0 p-4 bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l'>Sign In</button>
                                <button onClick={deleteAccount} className='w-full sm:w-[60%] p-4 bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l'>Other Account</button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className='flex flex-col p-6 sm:p-12 md:p-16 lg:p-24 w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-center font-poppins text-white items-center'>
                        <CSSTransition
                            in={inProp}
                            classNames="fade"
                            timeout={900}
                            unmountOnExit
                        >
                            <div className='text-[8vh] sm:text-[10vh] md:text-[12vh] font-nunito font-bold'>
                                It's Qui<span className='text-[#7EC5DB]'>zz</span>os
                            </div>
                        </CSSTransition>
                        <div className='pt-9 flex flex-col gap-6 w-full sm:w-[70%] items-center'>
                            <div className='w-full sm:w-[40%] md:w-[50%] lg:w-[40%]'>
                                <input type="name" className="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none " placeholder="Insert Name" ref={name} />
                            </div>
                            <div className='w-full sm:w-[40%] md:w-[50%] lg:w-[40%]'>
                                <input type="username" className="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none" placeholder="Insert Username" ref={username} />
                            </div>
                            <div className="relative w-full sm:w-[40%] md:w-[50%] lg:w-[40%]">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    className="text-white placeholder-[#D9D9D9] p-4 bg-transparent shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg border-l border-l-[rgba(0,0,0,0.50)] border-b border-b-[rgba(0,0,0,0.50)] border-solid w-full focus:outline-none pr-10"
                                    placeholder="Insert Password"
                                    ref={password}
                                />
                                <button
                                    type="button"
                                    className="absolute text-white transform -translate-y-1/2 right-3 top-1/2"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? <BiShowAlt className="text-[3.5vh]" /> : <BiHide className="text-[3.5vh]" />}
                                </button>
                            </div>
                            <button className='mt-[5vh] w-full sm:w-[40%] p-4 bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l' onClick={handleSignUp}>Sign Up</button>
                        </div>
                    </div>
                ))}
        </div>
    );
}

export default SignUpSignIn
