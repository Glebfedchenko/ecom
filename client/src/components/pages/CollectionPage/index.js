import React from "react";
import CollectionItem from "../../pieces/CollectionItem";
import { connect } from "react-redux";
import { selectShopCollectionByUrlParam } from "../../../redux/shop/selectors";
import "./index.scss";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items && items.map(item => <CollectionItem key={item.id} {...item} />)}
      </div>
    </div>
  );
};

export default connect((state, ownProps) => ({
  collection: selectShopCollectionByUrlParam(
    ownProps.match.params.collectionId
  )(state)
}))(CollectionPage);
