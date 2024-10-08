import React, { useState, useEffect } from 'react'
function Quiz({ questions, timeLimit, onQuizEnd }) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(timeLimit);
    const [answers, setAnswers] = useState([]);
    const [quizEnded, setQuizEnded] = useState(false);

    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem('quizState'));
        if (savedState) {
            setCurrentQuestionIndex(savedState.currentQuestionIndex);
            setScore(savedState.score);
            setTimer(savedState.timer);
            setAnswers(savedState.answers);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('quizState', JSON.stringify({
            currentQuestionIndex,
            score,
            timer,
            answers
        }));
    }, [currentQuestionIndex, score, timer, answers]);

    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                clearInterval(countdown);
                handleQuizEnd();
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer]);

    const handleQuizEnd = () => {
        setQuizEnded(true);
        onQuizEnd({
            score,
            totalQuestions: questions.length,
            answered: answers.length
        });
    };

    const handleAnswer = (isCorrect) => {
        if (isCorrect) setScore(score + 1);

        setAnswers([...answers, isCorrect ? "Correct" : "Incorrect"]);

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleQuizEnd();
        }
    };

    const handleTryAgain = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setTimer(timeLimit);
        setAnswers([]);
        setQuizEnded(false);
    };

    if (!questions || questions.length === 0 || currentQuestionIndex >= questions.length) {
        return (
            <div>
                  <p className='text-[5vh] font-semibold'>Loading . . .</p>
                  <p className='pt-[2vh]'>if it didn't appear, try refresh the page</p>
            </div>
        )
    }

    if (quizEnded) {
        return (
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
                <button className='p-3 sm:p-4 font-poppins bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l' onClick={handleTryAgain}>
                    Try Again?
                </button>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className='flex flex-col items-center w-full px-3 font-open-sans sm:px-6 md:px-12'>
            <h3 className='text-[3vh] sm:text-[3.5vh] md:text-[4vh]'>Question {currentQuestionIndex + 1}/{questions.length}</h3>
            <h1 className='text-[3.5vh] sm:text-[4vh] md:text-[5vh] font-bold pb-[5vh]'>{currentQuestion.question}</h1>
            <div className='grid grid-cols-2 w-[80%] sm:w-[60%] md:w-[40%] gap-[3vh] sm:gap-[5vh] justify-items-center'>
                {currentQuestion.answers.map((answer, index) => (
                    <button className='p-3 sm:p-4 w-full bg-gradient-to-r from-[rgba(52,73,94,0.75)] via-[rgba(109,213,250,0.50)] to-[rgba(52,73,94,0.75)] shadow-lg shadow-[rgba(0,0,0,0.25)] rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gradient-to-l' key={index} onClick={() => handleAnswer(answer.isCorrect)}>
                        {answer.text}
                    </button>
                ))}
            </div>
            <p className='text-[#FF2D00] font-bold py-9 text-[5vh] sm:text-[6vh] md:text-[7vh]'>{timer}s</p>
        </div>
    );
}

export default Quiz

