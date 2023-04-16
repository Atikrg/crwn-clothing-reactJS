import { Outlet, Link } from "react-router-dom"
import { Fragment, useContext } from "react"

import { NavigationContainer, LogoContainer, NavLinks, NavLink } from "./navigation.styles"
import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'

import { selectCurrentUser } from "../../store/user/user.selector";

import { CartContext } from "../../contexts/cart.context"

import { ReactComponent as CrwnLogo } from "../../assests/crown.svg"
import { signOutUser } from "../../utils/firebase/firebase.utils"
import { useSelector } from "react-redux"

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const { isCartOpen } = useContext(CartContext);
    return (
        <Fragment >
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>
                <NavLinks >
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ? (
                            <NavLink as = "span" onClick={signOutUser}>
                                SIGN OUT
                            </NavLink>
                        ) : (<NavLink  to='/auth'>
                            SIGN IN
                        </NavLink>
                        )}
                    <CartIcon />
                </NavLinks>
                {
                    isCartOpen && <CartDropDown />
                }
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}


export default Navigation