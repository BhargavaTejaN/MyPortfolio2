import { Routes, Route } from "react-router-dom";

import { Navbar, Footer } from "./components/index";
import { Home, About, Contact, Projects } from "./pages/index";

const App = () => {
  return (
    <main className="bg-slate-300/20 h-[100vh]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/*"
          element={
            <>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </main>
  );
};

export default App;
