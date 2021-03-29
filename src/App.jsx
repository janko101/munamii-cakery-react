import Footer from "./Components/Footer";
import Header from "./Components/Header";
import ImageDivider from "./Components/ImageDivider";
import Product from "./Components/Product";
import cupCakesJSON from "./assets/data/cupCakes.json";
import weddingCakesJSON from "./assets/data/weddingCakes.json";

import "./styles/App.css";

export default function App() {
  const cupCakes = cupCakesJSON.map((item) => {
    return (
      <Product
        key={item.id}
        title={item.title}
        price={item.price}
        fileName={item.fileName}
      />
    );
  });

  const weddingCakes = weddingCakesJSON.map((item) => {
    return (
      <Product
        key={item.id}
        title={item.title}
        price={item.price}
        fileName={item.fileName}
      />
    );
  });

  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <section className="content" id="cupcakes">
          <h2>Cupcakes</h2>
          {cupCakes}
          <h2>Wedding Cakes</h2>
          {weddingCakes}
        </section>
      </div>
      <ImageDivider />
      <Footer />
    </div>
  );
}
