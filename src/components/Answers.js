import React, { Component } from 'react'

export class Answers extends Component {
    render() {
        const { answers } = this.props;
        const answerValues = Object.values(answers).map(answer => answer)
        return (
            <div className="text-center sm:w-full">     
                <h1 className="text-xl md:text-4xl bg-gray-900 text-white w-3/4 sm:w-1/4 mx-auto p-4 text-center font-bold uppercase rounded-lg">Answers</h1>
                <div className="bg-gray-200 p-4 mt-4 mx-auto w-11/12 sm:w-1/2 shadow-md">
                    {
                        answerValues.map((answer,index) => {
                            const { questions } = this.props;
                            const actualAnswer = questions.questions[index].answers[questions.questions[index].correctIndex]
                            return (
                                <div className="my-2"> 
                                    <h1 className="font-bold mt-2 text-xl ">Question {index+1}</h1>
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
                <button className="bg-orange-500 hover:bg-orange-400 text-white mx-2 mt-8 py-3 px-10 font-bold rounded" onClick={ this.props.tryAgain }>Try Again</button>
            </div>
            
        )
    }
}

export default Answers
