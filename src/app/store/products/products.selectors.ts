import { getProductsState, getProductsData } from "./products.reducer";
import { createSelector } from "@ngrx/store";

export const getProducts = createSelector(
  getProductsState,
  getProductsData
);
