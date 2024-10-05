import React, { useState, useEffect } from 'react'
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
                    ].sort(() => Math.random() - 0.5) // Randomize the order of answers
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

    return (
        <div className='w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-white '>
            <div className='flex items-center justify-between w-full px-3 py-2'>
                <div className='text-[5vh] font-nunito font-bold'>
                    It's Qui<span className='text-[#7EC5DB]'>zz</span>os
                </div>
                <button onClick={logout} className='px-5 mb-3 font-medium'>Log Out</button>
            </div>
            <div className='flex flex-col items-center w-full p-24 text-center font-poppins'>
                {/* <h1>Welcome to the Quiz</h1>
                <h2>Gas ga nih {localStorage.getItem('name')} ???</h2> */}
                {isQuizStarted ? (
                    <Quiz questions={questions} timeLimit={120} onQuizEnd={handleQuizEnd} />
                ) : (
                    
                    <button onClick={() => setIsQuizStarted(true)}>Start Quiz</button>
                )}
                <div className=''>
                    
                </div>
            </div>
        </div>

    )
}

export default QuizApp
