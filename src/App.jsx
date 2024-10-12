import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from 'react'
import SignUpSignIn from "./sign/SignUpSignIn";
import Home from "./home/Home";
import Quiz from "./quiz/Quiz";

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Navigate to={"/login"} replace={true} />} />
            <Route path="/login" element={<SignUpSignIn/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
