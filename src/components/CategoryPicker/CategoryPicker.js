import React from 'react';
import classNames from 'classnames';
import classes from './CategoryPicker.module.scss';
import Category from './Category/Category';

const CategoryPicker = (props) => {
    const { className, categories,categoryClick } = props;
    return (
        <div className={classNames(classes.container, className)}>
            <div className={classes.title}>
                Existen 5 pilares de la seguridad vial. ¿Cual te atreves a escoger?
            </div>
            <div className={classes.categories}>
                {categories.map((category, key) => {
                    return <Category category={category} key={key} onClick={() => categoryClick(key)} />
                })}
            </div>
        </div>
    );
}

export default CategoryPicker;
