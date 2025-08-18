import { HelmetProvider } from "react-helmet-async";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsAppButton";
import Contact from "./pages/Contact";
import Corporate from "./pages/Corporate";
import Home from "./pages/Home";
import Services from "./pages/Services";

function App() {
  return (
    <HelmetProvider>
      <Router basename="/YukleGel/">
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hizmetler" element={<Services />} />
              <Route path="/kurumsal" element={<Corporate />} />
              <Route path="/iletisim" element={<Contact />} />
            </Routes>
          </main>
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
