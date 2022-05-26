import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Content/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/Content/AboutUs";
import ContactUs from "./Components/Content/ContactUs";
import Fouro4Page from "./Components/Content/Fouro4Page";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/aboutus" element={<AboutUs />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="*" element={<Fouro4Page />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
