import { useState } from "react";
import Home from "./pages/Home";
import TranslatorPage from "./pages/TranslatorPage";
import RandomStringPage from "./pages/RandomStringPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === "home" && <Home />}
      {page === "translator" && <TranslatorPage />}
      {page === "random-string" && <RandomStringPage />}
      <Footer />
    </div>
  );
}

export default App;
