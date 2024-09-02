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
import BikeCaseItem from "../../Components/BikeCaseItem/BikeCaseItem.components";
import BikeList from "../BikeList/BikeList.components";
 const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <PoliceLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/search" >Search Bikes</NavLink>
          <NavLink to="/info"> Info</NavLink>
          <NavLink to="/info"> 
          </NavLink>
        </NavLinks>
      </NavigationContainer>
         <Outlet />
    </Fragment>
  );}
export default Navigation;
