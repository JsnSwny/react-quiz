import React, { Component } from 'react'

export class Question extends Component {

    render() {
        const { questions, questionNumber } = this.props;
        return (
            <React.Fragment>
                <h1 className="text-xl md:text-4xl bg-gray-900 text-white w-3/4 mx-auto p-4 text-center font-bold uppercase rounded-lg">Question { questionNumber + 1 }</h1>
                <div className="bg-gray-300 p-8 mt-4 mx-auto shadow-md">
                    <p className="text-center lg:text-left text-lg sm:text-xl lg:text-2xl font-bold">{ questions[questionNumber].question }</p>
                    <br/>
                    {
                        questions[questionNumber].answers.map((answer,index) => {
                        const checked = this.props.answer === answer ? true : false;
                        return (
                            <div className="text-left text-sm md:text-xl my-2" key={index}>
                                <input type="radio" key={answer} onChange={this.props.selectRadio} name={questionNumber} checked={checked} value={answer}/> {answer}
                                <br/>
                            </div>
                        )
                        })   
                    }      
                </div>
            </React.Fragment>
            
        )
    }
}

export default Question
