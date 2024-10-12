import React from 'react'
import Navbar from '../items/Navbar'

function Result(
    { score, answers, questions, retry }
) {

    return (
        <div class="w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-white">
            <Navbar />
            <div className='flex flex-col items-center w-full pt-6 text-center sm:pt-12 md:pt-24 font-poppins'>
                <div className='pt-[5vh] px-3 sm:px-6 md:px-12'>
                    {score >= 8 ? (
                        <p className='text-[5vh] sm:text-[6vh] md:text-[7vh] font-bold'>
                            Bingo!, you've got <span className='text-[#32CD32]'>{score * 10}</span> points, Congratulations
                        </p>
                    ) : (
                        <p className='text-[5vh] sm:text-[6vh] md:text-[7vh] font-bold'>
                            Oops your points is <span className='text-[#FF2D00]'>{score * 10}</span>. Try again!
                        </p>
                    )}
                    <p className='text-[3vh] sm:text-[3.5vh] md:text-[4vh] pt-[5vh]'>{answers.length}/{questions.length} Questions Answered</p>
                    <div className='flex justify-center gap-x-6 sm:gap-x-10 pt-[4vh] pb-[4vh]'>
                        <div className='text-[#32CD32] font-semibold'>
                            <p className='text-[5vh] sm:text-[6vh] md:text-[7vh]'>{score}</p>
                            <p>Correct</p>
                        </div>
                        <div className='text-[#FF2D00] font-semibold'>
                            <p className='text-[5vh] sm:text-[6vh] md:text-[7vh]'>{answers.length - score}</p>
                            <p>Incorrect</p>
                        </div>
                    </div>
                    <button className='p-3 sm:p-4 font-poppins bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l' onClick={retry}>
                        Try Again?
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Result
