import { productsReducer } from "./products/products.reducer";
import { Product } from "../model/product.model";
import { GlobalState } from './global.state';
import { sidebarReducer } from './sidebar/sidebar.reducer';
import * as fromRouter from '@ngrx/router-store'
import { RouterState } from './router/router.reducer';
import { RouterReducerState } from '@ngrx/router-store';

export const allReducers = {
  products: productsReducer,
  global: sidebarReducer,
  router: fromRouter.routerReducer
}

export interface appState {
  products: Product[];
  global: GlobalState;
  router: RouterReducerState<RouterState>
}

