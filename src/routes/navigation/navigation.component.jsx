import {Fragment} from "react";
import {Outlet} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import "./navigation.styles.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import { NavigationContainer, LinkLogoContainer, NavLinkContainer, NavLink } from "./navigation.styles.jsx";
import { useSelector } from "react-redux";
import { SelectorUser } from "../../store/user/user.selector.js";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import { cartSelector } from "../../store/cart/cart.selector.js";

const Navigation = () => {
  const currentUser = useSelector(SelectorUser);
  const state = useSelector(cartSelector);

  return (
    <Fragment>
      <NavigationContainer>
        <LinkLogoContainer to="/">
          <CrwnLogo className="logo" />
        </LinkLogoContainer>
        <NavLinkContainer>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as={"span"} onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinkContainer>
        {state.isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
