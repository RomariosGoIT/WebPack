import React from 'react';
import classes from './PizzaImage.css';
import pizzaImg from '../../assets/pizza.jpg'

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={pizzaImg} className={classes.PizzaImg} />
    </div>
);

export default pizzaImage;

