import { Action } from "@ngrx/store";
import { Product } from "../../model/product.model";

export const LOAD_PRODUCTS = "[Products] Load Products";
export const LOAD_PRODUCTS_FAIL = "[Products] Load Products Fail";
export const LOAD_PRODUCTS_SUCCESS = "[Products] Load Products Success";
export const PRODUCT_SELECTED = "[Products] Product Selected";
export const SELECT_PRODUCT = "[Products] Select Product"
export const PRODUCT_SELECTED_FAIL = "[Products] Product Selected Fail";

export class LoadProducts implements Action {
  readonly type = LOAD_PRODUCTS;
  constructor(public categoryName: string) {}
}

export class LoadProductsFail implements Action {
  readonly type = LOAD_PRODUCTS_FAIL;
  constructor(public payload: any) {}
}

export class LoadProductsSuccess implements Action {
  readonly type = LOAD_PRODUCTS_SUCCESS;
  constructor(public payload: Product[]) {}
}

export class SelectProduct implements Action {
  readonly type = SELECT_PRODUCT;
  constructor(public payload: Product) {}
}

export class ProductSelected implements Action {
  readonly type = PRODUCT_SELECTED;
  constructor(public payload: Product) {}
}

export class ProductSelectedFail implements Action {
  readonly type = PRODUCT_SELECTED_FAIL;
  constructor(public payload: any) {}
}

export type ProductsActions =
  | LoadProducts
  | LoadProductsFail
  | LoadProductsSuccess
  | SelectProduct
  | ProductSelected
  | ProductSelectedFail;
