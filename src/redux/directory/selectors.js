import { createSelector } from "reselect";

const selectDirectory = state => state.directoryReducer;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  directoryReducer => directoryReducer.sections
);
