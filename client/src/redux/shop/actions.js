export const FETCH_COLLECTIONS_START = `FETCH_COLLECTIONS_START`;
export const FETCH_COLLECTIONS_SUCCESS = `FETCH_COLLECTIONS_SUCCESS`;
export const FETCH_COLLECTIONS_ERROR = `FETCH_COLLECTIONS_ERROR`;

export const fetchCollections = () => ({ type: FETCH_COLLECTIONS_START });

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsError = error => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: error
});
