import React from 'react';
import classNames from 'classnames'
import classes from './Stepper.module.scss'

const Stepper = props => {
    const { steps} = props;
    return (
        <div className={classes.container}>
            {steps.map((step,index) => {
                return (
                    <div key={index} className={classNames(classes.step,step.completed?classes.completed:null,step.fail?classes.fail:null)}> </div>
                )
            })}
        </div>
    )
}

export default Stepper;