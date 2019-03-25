import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CATEGORY_NAMES } from "../../model/categories.model";
import * as globalActions from "./global.actions";

export interface GlobalState {
  selectedCategoryName: CATEGORY_NAMES;
}

export const initialGlobalState: GlobalState = {
  selectedCategoryName: null
};

export function globalReducer(
  state = initialGlobalState,
  action: globalActions.GlobalActions | globalActions.ResetSelectedProduct
) {
  switch (action.type) {
    case globalActions.CATEGORY_SELECTED:
      let categoryName = action.payload;
      console.log("globalReducer: CATEGORY_SELECTED", categoryName);
      return {
        ...state,
        selectedCategoryName: categoryName
      };
    case globalActions.PRODUCT_SELECTED:
      let selectedProduct = action.payload;
      console.log("PRODUCT_SELECTED", selectedProduct);
      return {
        ...state,
        selectedProduct
      };
    case globalActions.RESET_SELECTED_PRODUCT:
      return {
        ...state,
        selectedProduct: null
      };
  }
  return state;
}

export const getGlobalState = createFeatureSelector<GlobalState>("global");

export const getSelectedCategory = createSelector(
  getGlobalState,
  (state: GlobalState) => state.selectedCategoryName
);
