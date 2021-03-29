import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ImageDivider from "./Components/ImageDivider";
import ProductList from "./Components/ProductList"

import "./styles/App.css";

export default function App() {

  return (
    <div className="App">
      <Header />
      <ProductList />
      <ImageDivider />
      <Footer />
    </div>
  );
}
