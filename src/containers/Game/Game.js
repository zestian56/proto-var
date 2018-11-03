import React, { Component } from 'react';
import classes from './Game.module.scss';

import Logos from '../../components/Logos/Logos';
import Stepper from '../../components/Stepper/Stepper';
import CategoryPicker from '../../components/CategoryPicker/CategoryPicker';
import Question from '../../components/Question/Question';


import gameCategories from '../../models/categories';
import questions from '../../models/questions';


const steps = [
    {
        completed: false,
        fail: false
    }, {
        completed: false,
        fail: false
    }, {
        completed: false,
        fail: false
    },
]


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            steps: steps,
            activeStep: 0,
            activeCategory: 0,
            activeQuestion: null,
            isSelecting: false,
            activeQuestions: []
        }
    }
    handleSelectCategory = (indexCategory) => {
        const categoryQuestions = [...questions[gameCategories[indexCategory].id]];
        const firstIndex = Math.round(Math.random() * (categoryQuestions.length - 1));
        console.log(firstIndex)
        this.setState({
            ...this.state,
            start: true,
            activeCategory: indexCategory,
            activeQuestion: firstIndex,
            isSelecting: true,
            activeStep: 0,
            activeQuestions: categoryQuestions
        })
    }
    handleSelectOption = isCorrect => {
        const step = {
            ...this.state.steps[this.state.activeStep],
            completed: isCorrect,
            fail: !isCorrect
        };
        const newSteps = [...this.state.steps];
        newSteps[this.state.activeStep] = step;
        const newQuestions = [...this.state.activeQuestions];
        newQuestions.splice(this.state.activeQuestion, 1);
        const newIndex = Math.round(Math.random() * (newQuestions.length - 1));
        if (newQuestions.length < 1) {
            alert('No hay más preguntas')
            this.setState({
                ...this.state,
                steps: newSteps,
            })
        } else {
            this.setState({
                ...this.state,
                steps: newSteps,
                activeStep: this.state.activeStep + 1,
                activeQuestions: newQuestions,
                activeQuestion: newIndex
            })
        }
    }
    render() {
        const { start, isSelecting, activeQuestions, activeQuestion, steps } = this.state;
        return (
            <div className={classes.container}>
                <div className={classes.logos}>
                    <Logos />
                </div>
                <div className={classes.content}>
                    <Stepper className={classes.stepper} steps={steps} />
                    <div className={classes.rightContent}>
                        {!start ? <CategoryPicker categories={gameCategories} categoryClick={this.handleSelectCategory} /> : null}
                        {start && isSelecting ? <Question question={activeQuestions[activeQuestion]} optionClick={this.handleSelectOption} /> : null}
                    </div>
                </div>
            </div>
        );
    }
}


export default Game;
