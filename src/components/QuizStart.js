import React from 'react';

const QuizStart = ({ nextStep }) => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="bg-gray-300 w-11/12 md:w-1/2 py-16 text-center shadow-md">
                <h1 className="text-5xl font-bold">QUIZ</h1>
                <p className="italic mb-10">Created using React</p>
                <button onClick={ nextStep } className="bg-green-500 hover:bg-green-400 focus:outline-none text-white text-xl py-4 px-10 rounded-lg">Click To Start</button>
            </div>
        </div>
    )
}

export default QuizStart;