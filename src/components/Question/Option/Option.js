import React from 'react';
import classes from './Option.module.scss';

const Option = (props) => {
    const {option, onClick} = props;
    return (
        <div className={classes.container} onClick={onClick}>
                {option.label}
        </div>
    );
}

export default Option;
