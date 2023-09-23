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
import { useState, useEffect } from "react";
import {ethers} from "ethers";
import abi from "./abi.json";
import About from "./pages/About";
import Contact from "./pages/Contact";
// const POLYGON_MUMBAI_ID = 80001;

function App() {
  const [accounts, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    if (window.ethereum == null) {
      alert("MetaMask not installed; using read-only defaults");
      console.log("MetaMask not installed; using read-only defaults")
      setProvider(ethers.getDefaultProvider());
      notify2();
    } else {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        console.log(provider);
        const loadProvider = async () => {
          if (provider) {
            window.ethereum.on("chainChanged", () => {
              window.location.reload();
            });
            console.log(provider);
            window.ethereum.on("accountsChanged", () => {
              window.location.reload();
            });
            await provider.send("eth_requestAccounts", []);
            const signer = await provider.getSigner();
            const address = await signer.getAddress();
            setAccount(address);
            let contractAddress = "0xC3Ba30c050Fc7094784bAaaB2b30471FdEaa1EBA";

            const contract = new ethers.Contract(
              contractAddress,
              abi,
              signer
            );
            //console.log(contract);
            setContract(contract);
            setProvider(provider);
          } else {
            alert("Metamask is not installed");
            console.error("Metamask is not installed");
          }
        };
        provider && loadProvider();
      }
  }, []);

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
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>}/>
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />

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
