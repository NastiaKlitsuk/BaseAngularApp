import { Product } from "../../model/product.model";
import * as fromProducts from "./products.actions";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface ProductsState {
  products: Product[];
  loading: boolean;
  loaded: boolean;
}

const initialState = {
  products: [],
  loading: false,
  loaded: false
};

export function productsReducer(
  state = initialState,
  action: fromProducts.ProductsActions
) {
  switch (action.type) {
    case fromProducts.LOAD_PRODUCTS:
      return {
        ...state,
        loading: true
      };

    case fromProducts.LOAD_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false
      };

    case fromProducts.LOAD_PRODUCTS_SUCCESS:
      let products = action.payload;
      console.log("fromProducts.LOAD_PRODUCTS_SUCCESS", products);
      return {
        ...state,
        products,
        loading: false,
        loaded: true
      };
  }

  return state;
}

export const getProductsData = (state: ProductsState) => state.products;
export const getProductsLoading = (state: ProductsState) => state.loading;
export const getProductsLoaded = (state: ProductsState) => state.loaded;

export const getProductsState = createFeatureSelector<ProductsState>(
  "products"
);

export const getProducts = createSelector(
  getProductsState,
  getProductsData
);