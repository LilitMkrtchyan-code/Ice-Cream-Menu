import "./IceCream.css";

const IceCream = ({ iceCream }) => {
  return (
    <div className="ice-cream">
      <a href="http://localhost:3000/">
        <img
          src={iceCream.imageUrl}
          alt={iceCream.name}
          className="ice-cream__img"
        />
      </a>
      <div className="ice-cream__content">
        <h4 className="ice-cream__name">
          <a href="http://localhost:3000/" className="ice-cream__name-link">
            {iceCream.name}
          </a>
        </h4>
        <div className="ice-cream__price">$ {iceCream.price}</div>
        <div className="ice-cream__description">{iceCream.ingredients}</div>
        <button type="button" className="ice-cream__btn">
          View
        </button>
      </div>
    </div>
  );
};

export default IceCream;
