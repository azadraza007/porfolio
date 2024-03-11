import About from "./components/About";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Porfolio from "./components/Porfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <Navbar />
      <Home />

      <SocialLinks />
      <About />
      <Porfolio />
      <Experience />
      <Contact />
    </>
  );
}

export default App;
