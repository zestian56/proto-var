import React, { Component } from 'react';
import classes from './Game.module.scss';

import Logos from '../../components/Logos/Logos';
import Stepper from '../../components/Stepper/Stepper';
import CategoryPicker from '../../components/CategoryPicker/CategoryPicker';
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
const gameCategories = [
    {
        label: 'Infraestructura segura',
        id: 0,
        img: ''
    }, {
        label: 'Atención a victimas',
        id: 1,
        img: ''
    }, {
        label: 'Comportamiento humano',
        id: 2,
        img: ''
    }, {
        label: 'Usuarios',
        id:3,
        img: ''
    }, {
        label: 'Gestión institucional',
        id:4,
        img: ''
    },
]
const videos = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
}
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            activeCategory: 0,
            steps: steps,
            activeStep: 0,
            videos: []
        }
    }
    handleSelectCategory = (indexCategory) => {
        console.log(indexCategory)
        this.setState({
            start: true,
            activeCategory: indexCategory,
            activeStep: 0,
            videos: videos[gameCategories[indexCategory].id]
        })
    }
    render() {
        return (
            <div className={classes.container}>
                <div className={classes.logos}>
                    <Logos />
                </div>
                <div className={classes.content}>
                    <Stepper steps={this.state.steps} />
                    {!this.state.start ? <CategoryPicker className={classes.rightContent} categories={gameCategories} categoryClick={this.handleSelectCategory} /> :
                        <div> Se prendio
                    </div>}
                </div>
            </div>
        );
    }
}


export default Game;
