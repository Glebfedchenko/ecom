import { createSelector } from "reselect";

const selectShop = state => state.shopReducer;

export const selectShopCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectShopCollectionByUrlParam = urlParam =>
  createSelector([selectShopCollections], collections =>
    collections ? collections[urlParam] : null
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollectionsFetchingState = createSelector(
  [selectShop],
  shop => shop.isFetching
);

export const selectCollectionsLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
);
