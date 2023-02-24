import styled from 'styled-components'



export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color : #355070;;
  flex-grow: 2;
`;


export const Rectangle = styled.div`
  background-color : #ffc8dd;
  min-height : 3rem;
  border: 1px solid black;
  border-radius: 10px;
  margin: 1rem;
`;
export const Header = styled.header`
  background-color : #78290f;
  min-height : 5rem;
  min-width: 100vw;
`;



export const Footer = styled.footer`
  background-color : #006400;
  min-height : 10rem;
  min-width: 100vw;
`;


export const Menu = styled.nav`
  background-color : #006400;

  width: 40px;
    height: 30px;
    position: relative;
    top: 15px;
    display: none;

  ul{ 
    display: flex;
    flex-direction: column;
  }
  li{
    list-style-type: none;
    margin: 5px;
    cursor: pointer;
  }
`;

export const BurgerMenu = styled.div`
font-size: 36px;
margin: 10px;
cursor: pointer;
`;

