import React, { Component } from 'react'
import Question from './Question'
import questions from '../questions.json';
import Answers from './Answers'

export class Quiz extends Component {

    state = {
        step: 1,
        questionNumber: 0,
        answers: {

        }
    }

    resetAnswers() {
        const questionsObj = {}
        for(let i=0; i<questions.questions.length; i++) {
            questionsObj[i] = '';
        }
        this.setState({
            answers: questionsObj
        })
    }

    componentDidMount() {
        this.resetAnswers()
    }

    selectRadio = (e) => {
        let { questionNumber, answers } = this.state;
        let currentAnswers = answers;
        currentAnswers[questionNumber] = e.target.value
        this.setState({
            answers: currentAnswers
        })
    }
    
    // Proceed to next step
    nextQuestion = () => {
        const { questionNumber } = this.state;
        this.setState({
            questionNumber: questionNumber + 1
        });
    }

    // Go back to prev step
    prevQuestion = () => {
        const { questionNumber } = this.state;
        this.setState({
            questionNumber: questionNumber - 1
        });
    }

    submitQuestions = () => {
        this.setState({
            step: this.state.step + 1
        })
    }

    tryAgain = () => {
        this.setState({
            step: 1,
            questionNumber: 0,
            answers: {}
        })
        this.resetAnswers()
    }

    render() {
        const { questionNumber } = this.state;

        if (this.state.step === 1)  {
            return (
                <div className="h-full sm:h-screen flex flex-col justify-center items-center">  
                    <div className="relative mt-4 md:mt-0 w-3/4 md:w-1/2">
                            <Question 
                                questionNumber={ questionNumber }
                                questions={ questions.questions }
                                selectRadio={ this.selectRadio }
                                answer={ this.state.answers[questionNumber] }
                            />


                    </div>
                        <div className="flex absolute bottom-0 md:static mb-6">
                            {questionNumber > 0 && <button className="bg-red-500 hover:bg-red-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-3 rounded" onClick={ this.prevQuestion }>Previous Question</button>}
                            {questionNumber + 1 < questions.questions.length && <button className="bg-blue-500 hover:bg-blue-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-3 rounded" onClick={ this.nextQuestion }>Next Question</button>}
                            
                            
                            {questionNumber + 1 === questions.questions.length && <button className="bg-green-500 hover:bg-green-400 text-sm md:text-lg text-white font-bold mx-2 mt-4 py-4 px-8 rounded" onClick={ this.submitQuestions }>Submit</button>}
                        </div>
                </div>
            )      
        } else {
            return (
                <div className="h-full flex justify-center items-center my-4">  
                    <Answers answers={ this.state.answers } questions={ questions } tryAgain={ this.tryAgain } />
                </div>
            )
        }

    }
}

export default Quiz
