import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ImageDivider from "./Components/ImageDivider";
import ProductList from "./Components/ProductList";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route component={HomePage} path="/" exact/>
          <Route component={About} path="/about"  />
          <Route component={ProductList} path="/products" />
          <Route component={Contact} path="/contact" />
        </Switch>
      </BrowserRouter>
      <ImageDivider />
      <Footer />
    </div>
  );
}
