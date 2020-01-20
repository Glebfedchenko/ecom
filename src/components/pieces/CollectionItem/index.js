import React from "react";
import CustomButton from "../CustomButton";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart/actions";
import "./index.scss";

const CollectionItem = ({ name, imageUrl, price, id, addItem }) => {
  const item = { id, name, imageUrl, price };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(item)}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default connect(null, { addItem })(CollectionItem);
