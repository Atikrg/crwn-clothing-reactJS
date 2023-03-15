import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
import { CartIconContainer, ItemCount, ShoppingIconStyle } from './cart-icon.styles';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';

const CartIcon = ()=>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIsCartOpen = ()=>{
        setIsCartOpen(!isCartOpen);
    }
    return (
        <CartIconContainer onClick = {toggleIsCartOpen}>
        <ShoppingIconStyle as = 'span'>
            <ShoppingIcon />
        </ShoppingIconStyle>
            <ItemCount as='span'>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;