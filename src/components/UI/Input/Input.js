import React from 'react';
import classes from './Input.module.scss';
import classNames from 'classnames'
const Input = props => {
    const { type, id, name, label, icon, placeholder,className } = props;
    return (
        <div className={classNames(classes.container,className)}>
            <div className={classes.iconContainer}> 
                {icon}
            </div>
            <input className={classes.input} type={type} id={id} name={name} label={label} placeholder={placeholder}  />
        </div>

    )
}
export default Input;