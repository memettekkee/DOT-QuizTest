import React, { useState, useEffect } from 'react'
import Navbar from '../items/Navbar';
import Result from './Result';
function Quiz() {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(300);
    const [answers, setAnswers] = useState([]);
    const [quizEnded, setQuizEnded] = useState(false);
    const [questions, setQuestions] = useState([]);

    const catchData = async () => {
        const API_URL = import.meta.env.VITE_REACT_API_URL;
        fetch(`${API_URL}`)
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
    };

    useEffect(() => {
        catchData();
    }, []);

    const handleQuizEnds = (result) => {
        console.log('Quiz finished', result);
    };

    const loadState = () => {
        const savedStates = localStorage.getItem("quizState");
        const stateQuiz = JSON.parse(savedStates)

        if (savedStates) {
            const {
                savedIndex,
                savedQuestion,
                savedScore,
                savedTimer,
            } = stateQuiz;

            setCurrentQuestionIndex(savedIndex);
            setQuestions(savedQuestion);
            setScore(savedScore);
            setTimer(savedTimer);
        } else {
            catchData();
        }
    }

    useEffect(() => {
        loadState();
    }, []);

    const saveState = () => {
        const stateQuiz = {
            savedIndex: currentQuestionIndex,
            savedQuestion: questions,
            savedScore: score,
            savedTimer: timer,
        };
        localStorage.setItem("quizState", JSON.stringify(stateQuiz))
    }

    useEffect(() => {
        if (questions.length > 0) {
            saveState();
        }
    }, [currentQuestionIndex]);

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
        handleQuizEnds({
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
        setTimer(300);
        setAnswers([]);
        setQuizEnded(false);
        localStorage.removeItem("quizState");
    };

    if (!questions || questions.length === 0 || currentQuestionIndex >= questions.length) {
        return (
            <div class="w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-white">
                <Navbar />
                <div className='flex flex-col items-center w-full pt-6 text-center sm:pt-12 md:pt-24 font-poppins'>
                    <div>
                        <p className='text-[5vh] font-semibold'>Loading . . .</p>
                        <p className='pt-[2vh]'>if it didn't appear, try refresh the page</p>
                    </div>
                </div>
            </div>
        )
    }

    if (quizEnded) {
        return (
            <Result
                score={score}
                answers={answers}
                questions={questions}
                retry={handleTryAgain}
            />
        )
    }

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className='w-full min-h-screen bg-gradient-to-t from-[#2C3E50] to-[#4CA1AF] text-white'>
            <Navbar />
            <div className='flex flex-col items-center w-full pt-6 text-center sm:pt-12 md:pt-24 font-poppins'>
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
            </div>
        </div>
    );
}

export default Quiz

