import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Certificate from "./pages/Certificate";
import Generate from "./pages/Generate";
import Contact from "./pages/Contact.jsx";
import { useState } from "react";
const ethers = require('ethers');

// const POLYGON_MUMBAI_ID = 80001;

function App() {
  
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ChakraProvider>
      <Router>
        <Header>
            <div className='bg-[#C6EFF1] p-2 rounded-full'>Connect wallet</div>
              
        </Header>
        <div className="bg-[#C6EFF1] min-h-screen">

          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/search" element={<div>Search</div>} />
                <Route path="/generate" element={<Generate />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>}/>
                {/* Pass handleLogin function to Login component */}
                <Route
                  path="/login"
                  element={<Login handleLogin={handleLogin} />}
                />
                <Route path="/register" element={<Register />} />
              </>
            )}
          </Routes>
        </div>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
