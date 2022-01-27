import "./App.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <About />
      <Portfolio></Portfolio>
      <ContactForm></ContactForm>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}

export default App;
