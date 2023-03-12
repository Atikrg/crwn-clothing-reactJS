<<<<<<< HEAD
import './cart-dropdown.styles.scss'
=======
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import './cart-dropdown.styles.scss';
>>>>>>> 0d08e4635118c284fcf37de181b66e5cbc23379b

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
<<<<<<< HEAD
    const goToCheckoutHandler = ()=>{
        navigate('/checkout');
    }
=======

    const goToCheckoutHandler=()=>{
        navigate('/checkout')
    }

>>>>>>> 0d08e4635118c284fcf37de181b66e5cbc23379b
    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
            {
                cartItems.map(item=>
                    <CartItem key={item.id} cartItem={item}/>
                )
            }
            </div>
<<<<<<< HEAD
            <Button onClick = {goToCheckoutHandler}>GO TO CHECKOUT</Button>
=======
            <Button onClick = {goToCheckoutHandler} >GO TO CHECKOUT</Button>
>>>>>>> 0d08e4635118c284fcf37de181b66e5cbc23379b
        </div>
    )
}
export default CartDropdown;