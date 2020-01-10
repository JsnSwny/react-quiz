import React from 'react'
import ProgressBar from './ProgressBar'

const Question = ({ questions, questionNumber, selectOption, answerValue }) => {
    return (
        <React.Fragment>
            <h1 className="text-xl md:text-4xl bg-gray-900 text-white w-3/4 mx-auto p-4 text-center font-bold uppercase rounded-lg">Question { questionNumber + 1 }</h1>
            <ProgressBar 
                percentage={ (((questionNumber) / questions.length) * 100).toFixed(0) + "%"}
            />
            <div className="bg-gray-300 p-8 mt-4 mx-auto shadow-md">
                <p className="text-center lg:text-left text-lg sm:text-xl lg:text-2xl font-bold">{ questions[questionNumber].question }</p>
                <br/>
                {
                    questions[questionNumber].answers.map((answer,index) => {
                    const checked = answerValue[questionNumber] === answer ? true : false;
                    return (
                        <React.Fragment key={index}>
                            { 
                                checked === true
                                ? <button value={answer} onClick={selectOption} className="w-full focus:outline-none text-left text-sm md:text-xl my-2 bg-green-200 p-3 cursor-pointer">{ answer }</button>
                                : <button value={answer} onClick={selectOption} className="w-full focus:outline-none text-left text-sm md:text-xl my-2 bg-gray-100 hover:bg-gray-200 p-3 cursor-pointer">{ answer }</button>
                            }
                        </React.Fragment>
                    )
                    })   
                }      
            </div>
        </React.Fragment>
    )
}

export default Question
