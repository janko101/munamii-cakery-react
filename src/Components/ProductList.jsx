import ProductCard from "./ProductCard";

import cupCakesJSON from "../assets/data/cupCakes.json";
import weddingCakesJSON from "../assets/data/weddingCakes.json";

export default function ProductList() {
  const cupCakes = cupCakesJSON.map((item) => {
    return (
      <ProductCard
        key={item.id}
        title={item.title}
        price={item.price}
        fileName={item.fileName}
      />
    );
  });

  const weddingCakes = weddingCakesJSON.map((item) => {
    return (
      <ProductCard
        key={item.id}
        title={item.title}
        price={item.price}
        fileName={item.fileName}
      />
    );
  });

  return (
    <div className="content-wrap">
      <section className="content" id="cupcakes">
        <h2>Cupcakes</h2>
        <div className="grid">{cupCakes}</div>
        <h2>Wedding Cakes</h2>
        <div className="grid">{weddingCakes}</div>
      </section>
    </div>
  );
}
