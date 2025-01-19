import { Fragment } from "react";
import IceCream from "./IceCream";
import "./IceCreamMenu.css";

const IceCreamMenu = ({ iceCreamList }) => {
  const isEmpty = iceCreamList.length === 0;

  return (
    <section className="menu">
      {!isEmpty && (
        <Fragment>
          <h2 className="menu__title">Ice Cream Menu</h2>
          <div className="menu__text">
            All of our ice cream is made from scratch on premises!
          </div>
        </Fragment>
      )}
      <div className="container">
        <div className="menu__list">
          {isEmpty ? (
            <div className="menu__empty">
              No ice cream available. Try a different search!
            </div>
          ) : (
            iceCreamList.map((iceCream) => (
              <IceCream key={iceCream.id} iceCream={iceCream} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default IceCreamMenu;
