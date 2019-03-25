import { Action } from "@ngrx/store";
import { Product } from "../../model/product.model";

export const CATEGORY_SELECTED = "[Global] Category Selected";
export const PRODUCT_SELECTED = "[Global] Product Selected";
export const SELECT_PRODUCT = "[Global] Select Product";
export const RESET_SELECTED_PRODUCT = "[Global] Reset Selected Product";
export const PRODUCT_SELECTED_FAIL = "[Global] Product Selected Fail";

export class CategorySelected implements Action {
  readonly type = CATEGORY_SELECTED;
  constructor(public payload: string) {}
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

export class ResetSelectedProduct implements Action {
  readonly type = RESET_SELECTED_PRODUCT;
}

export type GlobalActions =
  | CategorySelected
  | SelectProduct
  | ProductSelected
  | ProductSelectedFail;
