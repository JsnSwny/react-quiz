import React, { useState, useEffect } from 'react'
import Question from './Question'
import questions from '../questions.json';
import Answers from './Answers'

const Quiz = () => {

    const [step, setStep] = useState(1);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [answers, setAnswers] = useState([new Array(questions.questions.length).fill("")]);

    // Creates object containing question number: answer
    const resetAnswers = () => {
        setAnswers(new Array(questions.questions.length).fill(""))
    }
        
    // Handles answer select
    const selectOption = (e) => {
        answers[questionNumber] = e.target.value
        setAnswers([...answers])
    }
    
    // Proceed to next question
    const nextQuestion = () => {
        setQuestionNumber(questionNumber + 1);
    }

    // Go back to prev question
    const prevQuestion = () => {
        setQuestionNumber(questionNumber - 1);
    }

    // Move to answers component
    const submitQuestions = () => {
        setStep(step + 1)
    }

    // Reset state
    const tryAgain = () => {
        setStep(1)
        setQuestionNumber(0)
        setAnswers([])
        resetAnswers()
    }

    if (step === 1)  {
        return (
            <div className="h-full sm:h-screen flex flex-col justify-center items-center">  
                <div className="relative mt-4 md:mt-0 w-3/4 md:w-1/2">
                        <Question 
                            questionNumber={ questionNumber }
                            questions={ questions.questions }
                            selectOption={ selectOption }
                            answerValue={ answers }
                        />
                </div>
                    <div className="flex md:static mb-6">
                        {questionNumber > 0 && <button className="bg-red-500 focus:outline-none hover:bg-red-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-3 rounded" onClick={ prevQuestion }>Previous Question</button>}
                        {questionNumber + 1 < questions.questions.length && <button className="bg-blue-500 focus:outline-none hover:bg-blue-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-3 rounded" onClick={ nextQuestion }>Next Question</button>}
                        {questionNumber + 1 === questions.questions.length && <button className="bg-green-500 focus:outline-none hover:bg-green-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-8 rounded" onClick={ submitQuestions }>Submit</button>}
                    </div>
            </div>
        )    
    } else if (step === 2) {
        return (
            <div className="lg:h-screen flex justify-center items-center my-4 lg:my-0">  
                <Answers answers={ answers } questions={ questions } tryAgain={ tryAgain } />
            </div>
        )
    }
}

export default Quiz
