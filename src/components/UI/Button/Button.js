import React from 'react';
import classes from './Button.module.scss';
import classNames from 'classnames'
const Button = props => {
    const { children,className,onClick } = props;
    return (
        <button  className={classNames(classes.button,className)} onClick={onClick} >
            {children}
        </ button>
    )
}
export default Button;