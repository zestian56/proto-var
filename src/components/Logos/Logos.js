import React from 'react';
import classNames from 'classnames';
import classes from './Logos.module.scss';

//import solutrafficLogo from '../../assets/images/solutraffic.png';
import varLogo from '../../assets/images/var.png';

const Logos = props => {
    const {className} = props;
    return (
        <div className={classNames(classes.container, className)}>
            <img src={varLogo} alt="VAR" className={classes.mainLogo} />
        </div>
    )
}
export default Logos;