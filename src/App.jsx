import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Globalcard = lazy(() => import("./components/Globalcard"));
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home/Home"));
const Headphones = lazy(() => import("./pages/Headphones"));
const Speakers = lazy(() => import("./pages/Speakers"));
const Earphones = lazy(() => import("./pages/Earphones"));
function App() {
  return (
    <Suspense>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphone" element={<Headphones />} />
          <Route path="/speaker" element={<Speakers />} />
          <Route path="/earphone" element={<Earphones />} />
        </Routes>
        <Globalcard />
      </Router>
    </Suspense>
  );
}

export default App;
