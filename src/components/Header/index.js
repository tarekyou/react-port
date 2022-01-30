import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentCategory, setCurrentCategory } = props;

  return (
    <header className="flex-row px-1">
      <div className="flex-row">
        <h1>My React Portfolio</h1>
      </div>
      <div className="flex-row">
        <Nav
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Nav>
      </div>
    </header>
  );
}

export default Header;
