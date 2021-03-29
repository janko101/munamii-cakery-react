export default function Product({ title, price, fileName }) {
  const cupCakeImages = require(`../assets/images/cupcakes/${fileName}`);
  const imageURL = cupCakeImages.default;

  return (
    <div className="grid">
      <article className="product-card">
        <img className="product-image" src={imageURL} alt="image" />
        <div className="product-info">
          <h3 className="title">{title}</h3>
          <p className="price">{price}</p>
        </div>
      </article>
    </div>
  );
}
