import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../pieces/CollectionsOverview";
import CollectionPage from "../CollectionPage";
import { connect } from "react-redux";
import { fetchCollections } from "../../../redux/shop/actions";
import WithSpinner from "../../pieces/WithSpinner";
import { createStructuredSelector } from "reselect";
import {
  selectCollectionsFetchingState,
  selectCollectionsLoaded
} from "../../../redux/shop/selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  match,
  fetchCollections,
  isFetching,
  isCollectionsLoaded
}) => {
  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isFetching} {...props} />
        )}
      />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionsLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

export default connect(
  createStructuredSelector({
    isFetching: selectCollectionsFetchingState,
    isCollectionsLoaded: selectCollectionsLoaded
  }),
  { fetchCollections }
)(ShopPage);
