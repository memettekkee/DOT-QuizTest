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
    const deleteAccount = () => {
        localStorage.clear()
        window.location.reload()
    }

    return (
        <div>
            <h1>Welcome to the Quiz</h1>
            <h2>Gas ga nih {localStorage.getItem('name')} ???</h2>
            {isQuizStarted ? (
                <Quiz questions={questions} timeLimit={120} onQuizEnd={handleQuizEnd} />
            ) : (
                <button onClick={() => setIsQuizStarted(true)}>Start Quiz</button>
            )}
            <div className=''>
                <button onClick={logout} className=''>Log Out</button>
                <button onClick={deleteAccount} className=''>Delete</button>
            </div>
        </div>
    )
}

export default QuizApp
