import { createSelector } from "@ngrx/store";
import { getProductsState } from "../products/products.reducer";
import { getRouterState } from "../router/router.reducer";
import { Product } from "../../model/product.model";

export const getSelectedProduct = createSelector(
  getProductsState,
  getRouterState,
  (products, router): Product =>
    router.state &&
    products.products
      .filter(product => product.id === +router.state.params.productId)
      .shift()
);
