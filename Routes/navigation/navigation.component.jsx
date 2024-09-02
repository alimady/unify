import { Fragment } from "react";
import { Outlet } from "react-router-dom";
 
import { ReactComponent as PoliceLogo } from "../../assets/police-badge.svg";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles";
import TotalCases from "../../Components/TotalCases/TotalCases.component";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <PoliceLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/search">Search Bikes</NavLink>
           
          <NavLink to="/info"> Info</NavLink>
          <NavLink to="/info"> 
          
          </NavLink>

        </NavLinks>
      </NavigationContainer>
      <TotalCases/>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
