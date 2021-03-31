export default function ProductCard({ title, price, fileName }) {
  const productImages = require(`../assets/images/${fileName}`).default;

  return (
    <article className="product-card">
      <img className="product-image" src={productImages} alt="image" />
      <div className="product-info">
        <h3 className="title">{title}</h3>
        <p className="price">{price}</p>
      </div>
    </article>
  );
}
