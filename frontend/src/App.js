import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Certificate from "./pages/Certificate";
import Generate from "./pages/Generate";
import { useState } from "react";

function App() {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <ChakraProvider>
      <Router>
        <Header />
        <div className="bg-[#C6EFF1] min-h-screen">
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
        </div>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
