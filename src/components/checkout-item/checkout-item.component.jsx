<<<<<<< HEAD
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss'
const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
   
    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHandler = ()=> addItemToCart(cartItem);
    const removeItemHandler = ()=> removeItemFromCart(cartItem);
    
=======
import './checkout-item.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const clearItemHandler = () => {
        clearItemFromCart(cartItem);
    }
    const addItemHandler = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem);


>>>>>>> 0d08e4635118c284fcf37de181b66e5cbc23379b
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
<<<<<<< HEAD
                <div className='arrow' onClick = {removeItemHandler} >
                    &#10094;
                </div>
                <span className='value'>{quantity}</span>
=======
                <div className='arrow' onClick={removeItemHandler}>
                    &#10094;
                </div>
                <span className='value'>
                    {quantity}
                </span>
>>>>>>> 0d08e4635118c284fcf37de181b66e5cbc23379b
                <div className='arrow' onClick={addItemHandler}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick={clearItemHandler}>&#10005;</span>
<<<<<<< HEAD
        </div>

    )
}

=======

        </div>
    )
}
>>>>>>> 0d08e4635118c284fcf37de181b66e5cbc23379b
export default CheckoutItem;