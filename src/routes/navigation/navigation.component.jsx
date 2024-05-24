import {Fragment, useContext} from "react";
import {Outlet, Link} from "react-router-dom";

import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";

import "./navigation.styles.jsx";
import {UserContext} from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../context/cart.context";
import CartIcon from "../../components/cart-icon/cart-icon-component";
import { NavigationContainer, LinkLogoContainer, NavLinkContainer, NavLink } from "./navigation.styles.jsx";

const Navigation = () => {
  const {currentUser, setCurrentUser} = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const handleSignOut = async () => {
    await signOutUser()
    setCurrentUser(null);
  };
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
            <NavLink as={"span"} onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN IN
            </NavLink>
          )}
          <CartIcon></CartIcon>
        </NavLinkContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
