import { productsReducer } from "./products/products.reducer";
import { Product } from "../model/product.model";
import * as fromRouter from '@ngrx/router-store'
import { RouterState } from './router/router.reducer';
import { RouterReducerState } from '@ngrx/router-store';
import { globalReducer, GlobalState } from './global/global.reducer';

export const allReducers = {
  products: productsReducer,
  global: globalReducer,
  router: fromRouter.routerReducer
}

export interface appState {
  products: Product[];
  global: GlobalState;
  router: RouterReducerState<RouterState>
}

