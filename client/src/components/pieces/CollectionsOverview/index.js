import React from "react";
import { connect } from "react-redux";
import PreviewCollection from "../PreviewCollection";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from "../../../redux/shop/selectors";
import "./index.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(collection => (
      <PreviewCollection key={collection.id} {...collection} />
    ))}
  </div>
);
export default connect(
  createStructuredSelector({ collections: selectCollectionForPreview })
)(CollectionsOverview);
