import { productsReducer } from "./products/products.reducer";
import { Product } from "../model/product.model";
import { GlobalState } from './global.state';
import { sidebarReducer } from './sidebar/sidebar.reducer';

export const allReducers = {
  products: productsReducer,
  global: sidebarReducer
};

export interface appState {
  products: Product[];
  global: GlobalState;
}

