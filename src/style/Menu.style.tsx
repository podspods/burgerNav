import { Link } from "react-router-dom";
import styled from "styled-components";
import { AppTheme } from "./App.style";

export const MyNav = styled.nav`
  background-color: ${AppTheme.colors.medium};
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-decoration: none;
  border-radius: 0.6rem;
  padding: 2rem;
  font-size: 2rem;
  position: absolute;
  top: 0rem;
  left: 0rem;
  transform: translateY(0);
  transition: transform 1s ease-in-out;
 
`;

export const MyLink = styled(Link)`
  text-decoration: none;
`;
export const active = styled.div`
  
`;
