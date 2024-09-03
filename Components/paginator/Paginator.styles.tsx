import styled from "styled-components";



export const Paginator=styled.nav`
 display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  margin-left:auto;
  margin-right:auto
  justify-content: center;
  position:relative;
  buttom:2rem;


`


export const NavBotton=styled.button`
width: 85px;
  height: auto;
  margin: 0;
  border: none;
  color:white;
  background-color:black;
  border-radius:5px;
  padding:0.5rem;
  border-radius: 0;
 &:focus {
        outline: none;
         box-shadow: 0px 0px 2px red;
    }

`

