import { Action } from '@ngrx/store';
import { Product } from '../../model/product.model';

export const LOAD_PRODUCTS = '[Products] Load Products';
export const LOAD_PRODUCTS_FAIL = '[Products] Load Products Fail';
export const LOAD_PRODUCTS_SUCCESS = '[Products] Load Products Success';
export const SEARCH_PRODUCTS = '[Products] Search Products';

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

export class SearchProducts implements Action {
  readonly type = SEARCH_PRODUCTS;
  constructor(public payload: string) {}
}

export type ProductsActions =
  | LoadProducts
  | LoadProductsFail
  | LoadProductsSuccess
  | SearchProducts;
