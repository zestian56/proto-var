import React from 'react';
import classes from './End.module.scss';

const End = props => {
    const { steps } = props;

    const calificacion = steps.reduce((cal, step) => {
        return cal && !step.fail

    });

    if (calificacion) {
        return (
            <div className={classes.container} >
                <h1>Felicitaciones</h1>
                <p>Eres un ciudadano ejemplar</p>
            </div>
        );
    } else {
        return (
            <div className={classes.container} >
                <h1>Suerte para la proxima</h1>
                <p>Deberas esperar 3 min para volver a intentarlo</p>
            </div>
        );
    }

}

export default End;