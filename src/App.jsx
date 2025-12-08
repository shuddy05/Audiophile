import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Globalcard = lazy(() => import("./components/Globalcard"));
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home/Home"));
const Headphones = lazy(() => import("./pages/Headphones/Headphones"));
const Speakers = lazy(() => import("./pages/Speakers"));
const Earphones = lazy(() => import("./pages/Earphones"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Error = lazy(() => import("./pages/Error404"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
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
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Globalcard />
      </Router>
    </Suspense>
  );
}

export default App;
