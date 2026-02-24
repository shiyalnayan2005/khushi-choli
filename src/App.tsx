import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/header/Header";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/new-arrivals"
              element={<div>New Arrivals Page</div>}
            />
            <Route path="/collections" element={<div>Collections Page</div>} />
            <Route path="/bestsellers" element={<div>Bestsellers Page</div>} />
            <Route path="/about" element={<div>About Us Page</div>} />
            <Route path="/contact" element={<div>Contact Page</div>} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
