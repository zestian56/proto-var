import React from 'react';
import classes from './Option.module.scss';

const Option = (props) => {
    const { option, onClick } = props;
    return (
        <div className={classes.container} onClick={onClick}>
            <div className={classes.id}>
                {option.id}
            </div>
            <div className={classes.label}>
                {option.label}
            </div>
        </div>
    );
}

export default Option;
