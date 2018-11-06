import React from 'react';
import classes from './Category.module.scss';

const Category = (props) => {
    const { category, onClick } = props;

    return (
        <div className={classes.container} onClick={onClick}>
            <img src={category.img} alt={category.id} />
        </div>
    );
}

export default Category;
