import { productsState, getProductsData } from './products.reducer';
import { createSelector } from '@ngrx/store';

export const getProducts = createSelector(
  productsState,
  getProductsData
);
