import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
