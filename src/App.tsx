import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Loader />}>
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
