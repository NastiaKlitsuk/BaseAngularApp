import { getProductsState, getProductsData } from "./products.reducer";
import { createSelector } from "@ngrx/store";
import { getRouterState } from "../router/router.reducer";
import { Product } from "../../model/product.model";

export const getProducts = createSelector(
  getProductsState,
  getProductsData
);

export const getSelectedProduct = createSelector(
  getProductsState,
  getRouterState,
  (products, router): Product =>
    router.state &&
    products.products.filter(
      product => product.id === +router.state.params.productId
    )[0]
);
