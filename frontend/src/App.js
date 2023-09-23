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
<<<<<<< HEAD
import ContactForm from "./components/ContactForm";
=======
import { useState } from "react";
const ethers = require('ethers');

// const POLYGON_MUMBAI_ID = 80001;
>>>>>>> b8a9a69e024cd13d84f41d58dff614899a139294

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
<<<<<<< HEAD
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
=======
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<Dashboard />} />
                <Route path="/about" element={<div>About</div>} />
                <Route path="/certificate" element={<Certificate />} />
                <Route path="/search" element={<div>Search</div>} />
                <Route path="/generate" element={<Generate />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                {/* Pass handleLogin function to Login component */}
                <Route
                  path="/login"
                  element={<Login handleLogin={handleLogin} />}
                />
                <Route path="/register" element={<Register />} />
              </>
            )}
          </Routes>
>>>>>>> b8a9a69e024cd13d84f41d58dff614899a139294
        </div>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
