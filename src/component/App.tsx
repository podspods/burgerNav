import { StrictMode, useState } from "react";
import { AppGlobalStyle } from "../style/App.style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Country from "./Country";
import About from "./About";
import { BurgerMenu } from "../style/Home.style";
import Menu from "./Menu";

export default function App() {
  const [isHide, setDisplayState] = useState<boolean>(true);
  function ToggleDisplayMode() {
    setDisplayState(!isHide);
    console.log("ToggleDisplayMode");
    console.log(isHide);
  }

  return (
    <StrictMode>
      <StrictMode>
        <BrowserRouter>
          <AppGlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Country" element={<Country />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <MyNav className="hide"> */}
          <Menu>{isHide ? "hide" : ""}</Menu>

          {/* <MyNav className={isHide ? "hide" : null}> */}
        </BrowserRouter>
        <BurgerMenu onClick={ToggleDisplayMode}>
          <i className="fa-solid fa-bars"></i>
        </BurgerMenu>
      </StrictMode>
    </StrictMode>
  );
}
