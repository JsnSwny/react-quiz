import React, { Component } from 'react'

export class Answers extends Component {
    render() {
        const { answers, questions } = this.props;
        const answerValues = Object.values(answers).map(answer => answer)

        let correctAnswers = 0
        {
            answerValues.map((answer, index) => {
                if(questions.questions[index].answers[questions.questions[index].correctIndex] === answer) {
                    correctAnswers ++
                }
            })
        }
        return (
            <div className="text-center w-full">     
                <h1 className="text-2xl md:text-4xl bg-gray-900 text-white w-3/4 sm:w-1/4 mx-auto p-4 text-center font-bold uppercase rounded-lg">Answers</h1>
                <div className="bg-gray-200 p-4 mt-4 mx-auto w-11/12 md:w-3/4 shadow-md">
                    <h1 className="text-2xl sm:text-4xl">You scored <strong>{ correctAnswers }/{ questions.questions.length }!</strong></h1>
                    <div className="md:flex md:flex-wrap md:justify-center mt-4">
                    {
                        answerValues.map((answer,index) => {
                            
                            const actualAnswer = questions.questions[index].answers[questions.questions[index].correctIndex]
                            return (
                                <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 my-2"> 
                                    <h1 className="font-bold text-xl ">Question {index+1}</h1>
                                    {
                                        (actualAnswer === answer) 
                                        ? <h2 className="text-green-600" key={index}><strong>Correct!</strong> You answered: "{ answer }"</h2> 
                                        : <h2 className="text-red-600" key={index}><strong>Wrong!</strong> You answered: "{ answer }" <br/> <span className="text-xs">(Correct Answer: "{ actualAnswer }")</span></h2>
                                    }
                                </div>
                            )           
                        })   
                    }    
                    </div>
                </div>
                <button className="bg-orange-500 focus:outline-none hover:bg-orange-400 text-white mx-2 mt-8 py-3 px-10 font-bold rounded" onClick={ this.props.tryAgain }>Try Again</button>
            </div>
            
        )
    }
}

export default Answers
