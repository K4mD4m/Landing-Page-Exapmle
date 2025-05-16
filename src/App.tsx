import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Loader />}>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
