import React from 'react';
import T from 'prop-types';
import s from './ProductCard.module.scss';
import { Link, generatePath } from 'react-router-dom';
import { routes } from '../../scenes/router';
import ProductCard from './ProductCardView';
import { compose, withHandlers } from 'recompose';


const enhancer = compose(

)


export default ProductCard;