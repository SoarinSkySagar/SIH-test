import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Certificate from "./pages/Certificate";
import Generate from "./pages/Generate";
import ContactForm from "./components/ContactForm";

function App() {

  return (
      <ChakraProvider>
      <Router>
        <Header/>
        <div className="bg-[#C6EFF1] min-h-screen">
        <Routes>
          <Route path="/" element={<Home/>}/>  
          <Route path="/login" element={<Login/>}/>  
          <Route path="/register" element={<Register/>}/>  
          <Route path = "/home" element={<Dashboard/>}/>    
          <Route path = "/contact" element={<ContactForm/>}/>   
          <Route path = "/about" element={<About/>}/>   
          <Route path = "/certificate" element={<Certificate/>}/>   
          <Route path = "/search" element={<div>Search</div>}/>  
          <Route path = "/generate" element={<Generate/>}/>   
        </Routes>
        </div>
        <Footer/>
      </Router>
    </ChakraProvider>
  );
}

export default App;
