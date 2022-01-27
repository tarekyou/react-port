import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Header from "./components/Header";

function App() {
  const [currentCategory, setCurrentCategory] = useState("about");

  const displayCat = () => {
    switch (currentCategory) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <ContactForm />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div>
        <Header
          currentCategory={currentCategory}
          setCurrentCategory={setCurrentCategory}
        ></Header>
      </div>
      <div>
        <div>{displayCat()}</div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
  // <div>
  //   <Header></Header>
  //   <About />
  //   <Portfolio></Portfolio>
  //   <ContactForm></ContactForm>
  //   <Resume></Resume>
  //   <Footer></Footer>
  // </div>
}

export default App;
