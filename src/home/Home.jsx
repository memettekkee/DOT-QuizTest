import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import Navbar from '../items/Navbar';
import Swal from 'sweetalert2';

function Home() {

    const [isQuizStarted, setIsQuizStarted] = useState(false);
    const navigate = useNavigate()

    const quizStart = () => {
        setIsQuizStarted(true)
        Swal.fire({
            position: "top",
            title: "Good Luck 🎉🎉🎉!",
            showConfirmButton: false,
            timer: 1000
          });
    }
    
    return (
        <div className='w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-white'>
            <Navbar/>
            <div className='flex flex-col items-center w-full pt-6 text-center sm:pt-12 md:pt-24 font-poppins'>
                {isQuizStarted ? (
                    // <Quiz />
                    navigate("/quiz")
                ) : (
                    <div className='p-6 sm:p-10 md:p-20'>
                        <h1 className='text-[5vh] sm:text-[6vh] md:text-[6.5vh] font-semibold'>
                            Are you ready <span className='text-[#7EC5DB]'>{localStorage.name}</span> ?
                        </h1>
                        <button className="py-3 px-8 sm:py-4 sm:px-10 mt-5 bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l" onClick={quizStart}>Start Now !</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home

