import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import ScrollToTop from "./utils/ScrollToTop";
import Gallery from "./pages/Gallery";
import ContactForm from "./components/contactForm";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <ContactForm />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
