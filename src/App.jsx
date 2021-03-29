import Footer from "./Components/Footer";
import Header from "./Components/Header"
import ImageDivider from "./Components/ImageDivider"
import Product from "./Components/Product";

import "./styles/App.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Product />
      <ImageDivider />
      <Footer />
    </div>
  );
}
