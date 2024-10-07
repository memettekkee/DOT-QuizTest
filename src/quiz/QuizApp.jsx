import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import Quiz from './Quiz'

function QuizApp() {

    const [questions, setQuestions] = useState([]);
    const [isQuizStarted, setIsQuizStarted] = useState(false);

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10&type=multiple')
            .then(response => response.json())
            .then(data => {
                const formattedQuestions = data.results.map((q) => ({
                    question: q.question,
                    answers: [
                        ...q.incorrect_answers.map(ans => ({ text: ans, isCorrect: false })),
                        { text: q.correct_answer, isCorrect: true },
                    ].sort(() => Math.random() - 0.5)
                }));
                setQuestions(formattedQuestions);
            });
    }, []);

    const handleQuizEnd = (result) => {
        console.log('Quiz finished', result);
    };

    const logout = () => {
        localStorage.removeItem("signUp")
        window.location.reload()
    }

    const [inProp, setInProp] = useState(false);

    useEffect(() => {
        setInProp(true);
    }, []);

    return (
        <div className='w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-white'>
            <div className='flex items-center justify-between w-full px-3 py-2'>
                <CSSTransition
                    in={inProp}
                    classNames="slide"
                    timeout={900}
                    unmountOnExit
                >
                    <div className='text-[5vh] sm:text-[6vh] md:text-[7vh] font-nunito font-bold'>
                        It's Qui<span className='text-[#7EC5DB]'>zz</span>os
                    </div>
                </CSSTransition>
                <button onClick={logout} className='px-3 mb-3 text-sm font-medium sm:px-5 sm:text-base'>Log Out</button>
            </div>
            <div className='flex flex-col items-center w-full pt-6 text-center sm:pt-12 md:pt-24 font-poppins'>
                {isQuizStarted ? (
                    <Quiz questions={questions} timeLimit={300} onQuizEnd={handleQuizEnd} />
                ) : (
                    <div className='p-6 sm:p-10 md:p-20'>
                        <h1 className='text-[5vh] sm:text-[6vh] md:text-[6.5vh] font-semibold'>
                            Are you ready <span className='text-[#7EC5DB]'>{localStorage.name}</span> ?
                        </h1>
                        <button className='py-3 px-8 sm:py-4 sm:px-10 mt-5 bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l' onClick={() => setIsQuizStarted(true)}>Start Now !</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default QuizApp
