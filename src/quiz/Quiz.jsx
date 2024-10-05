import React, { useState, useEffect } from 'react'

function Quiz({ questions, timeLimit, onQuizEnd }) {

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(timeLimit);
    const [answers, setAnswers] = useState([]);
    const [quizEnded, setQuizEnded] = useState(false);  // New state for handling end

    // Load data from local storage for resuming quiz
    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem('quizState'));
        if (savedState) {
            setCurrentQuestionIndex(savedState.currentQuestionIndex);
            setScore(savedState.score);
            setTimer(savedState.timer);
            setAnswers(savedState.answers);
        }
    }, []);

    // Save quiz state in local storage for resuming if browser closes
    useEffect(() => {
        localStorage.setItem('quizState', JSON.stringify({
            currentQuestionIndex,
            score,
            timer,
            answers
        }));
    }, [currentQuestionIndex, score, timer, answers]);

    // Timer countdown
    useEffect(() => {
        const countdown = setInterval(() => {
            if (timer > 0) {
                setTimer(timer - 1);
            } else {
                clearInterval(countdown);
                handleQuizEnd();  // Handle quiz end if timer reaches 0
            }
        }, 1000);

        return () => clearInterval(countdown);
    }, [timer]);

    // Move logic to handle quiz end
    const handleQuizEnd = () => {
        setQuizEnded(true);  // Trigger the quiz to end
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
            handleQuizEnd();  // End quiz when all questions are answered
        }
    };

    // If quiz has ended, display result
    if (quizEnded) {
        return (
            <div>
                <h2>Quiz ended</h2>
                <p>Your score: {score}</p>
                <p>Questions answered: {answers.length}/{questions.length}</p>
                <p>Correct answers: {score}</p>
                <p>Incorrect answers: {answers.length - score}</p>
            </div>
        );
    }

    const currentQuestion = questions[currentQuestionIndex];


    return (
        <div>
            <h3>Question {currentQuestionIndex + 1}/{questions.length}</h3>
            <p>{currentQuestion.question}</p>
            {currentQuestion.answers.map((answer, index) => (
                <button key={index} onClick={() => handleAnswer(answer.isCorrect)}>
                    {answer.text}
                </button>
            ))}
            <p>Time remaining: {timer} seconds</p>
        </div>
    )
}

export default Quiz
