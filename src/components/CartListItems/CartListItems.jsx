import React from 'react';
import CartListItem from "components/CartListItem/CartListItem";
import classes from './CartListItems.module.scss'

const CartListItems = ({cartProducts}) => {
    return (
        <div>
            {cartProducts.length ? cartProducts.map(item => 
                <CartListItem {...item} key={item.product._id} />)
             : <span className={classes.cart_empty}>No items in a cart</span>}
        </div>
    );
};

export default CartListItems;