import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import User from "./pages/User";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode);
  }
  
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className={`home flex flex-col justify-between h-screen ${darkMode ? 'dark' : 'light'}`}>
       
            <Navbar darkMode={   <button className=" p-1 rounded-full bg-gray-200 dark:bg-gray-800" onClick={toggleDarkMode}>
  {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
</button>
}/>
            <main className="container mx-auto px-3 pb-12">
              <Alert />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/github-explorer-x/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/NotFound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
