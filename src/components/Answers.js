import React from 'react'

const Answers = ({ answers, questions, tryAgain }) => {
    let correctAnswers = 0
    answers.map((answer, index) => {
        if(questions.questions[index].answers[questions.questions[index].correctIndex] === answer) {
            correctAnswers ++
        }
        return correctAnswers
    })
    return (
        <div className="text-center w-full">     
            <h1 className="text-2xl md:text-4xl bg-gray-900 text-white w-3/4 md:w-1/2 mx-auto p-4 text-center font-bold uppercase rounded-lg">Answers</h1>
            <div className="bg-gray-200 p-4 mt-4 mx-auto w-11/12 md:w-3/4 shadow-md">
                <h1 className="text-2xl sm:text-4xl">You scored <strong>{ correctAnswers }/{ questions.questions.length }!</strong></h1>
                <div className="md:flex md:flex-wrap md:justify-center mt-4 mb-4">
                {
                    answers.map((answer,index) => {
                        const actualAnswer = questions.questions[index].answers[questions.questions[index].correctIndex]
                        if (actualAnswer === answer) {
                            return (
                                <div key={index} className="md:w-5/12 lg:w-1/3 xl:w-1/4 m-4 bg-green-200 py-6 rounded-lg shadow-inner"> 
                                    <h1 className="font-bold text-xl ">Question {index+1}</h1>
                                        <h2 className="m-4"><strong className="text-green-600">Correct!</strong> You answered: "{ answer }"</h2> 
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className="md:w-5/12 lg:w-1/3 xl:w-1/4 m-4 bg-red-200 py-6 rounded-lg shadow-inner"> 
                                    <h1 className="font-bold text-xl ">Question {index+1}</h1>
                                    <h2 className="m-4"><strong className="text-red-600">Wrong!</strong> You answered: "{ answer }" <br/> <span className="text-xs">(Correct Answer: "{ actualAnswer }")</span></h2>
                                </div>
                            )      
                        }     
                    })   
                }    
                </div>
            </div>
            <button className="bg-orange-500 focus:outline-none hover:bg-orange-400 text-lg text-white mx-2 mt-8 py-5 px-10 font-bold rounded w-3/4 md:w-1/4" onClick={ tryAgain }>Try Again</button>
        </div>
    )
}

export default Answers


