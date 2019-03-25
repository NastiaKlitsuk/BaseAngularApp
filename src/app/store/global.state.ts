import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CATEGORY_NAMES } from "../model/categories.model";

export interface GlobalState {
  selectedCategoryName: CATEGORY_NAMES;
}

export const initialGlobalState: GlobalState = {
  selectedCategoryName: null
};

export const getGlobalState = createFeatureSelector<GlobalState>("global");

export const getSelectedCategoryName = createSelector(
  getGlobalState,
  (state: GlobalState) => state.selectedCategoryName
);
