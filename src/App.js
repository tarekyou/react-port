import "./App.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <About />
      <Portfolio></Portfolio>
      <ContactForm></ContactForm>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}

export default App;
