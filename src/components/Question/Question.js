import React from 'react';
import classNames from 'classnames';
import classes from './Question.module.scss';

import Option from './Option/Option';
const Question = props => {
    const { question, className, optionClick } = props;
    console.log(question)
    return (
        <div className={classNames(classes.container, className)}>
            <video key={question.url} autoPlay={true} loop className={classes.video} >
                <source src={question.url} type="video/mp4" />
            </video>
            <div className={classes.options}>
                {Object.keys(question.options).map(key => {
                    const option = question.options[key];
                    return (
                        <Option key={key} option={option} onClick={() => optionClick(option.isCorrect)} />
                    )
                })}
            </div>
        </div>
    );
}

export default Question;
