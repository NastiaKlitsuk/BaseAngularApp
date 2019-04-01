import { createSelector } from '@ngrx/store';
import { productsState } from '../products/products.reducer';
import { getRouterState } from '../router/router.reducer';
import { Product } from '../../model/product.model';

export const getSelectedProduct = createSelector(
  productsState,
  getRouterState,
  (state, router): Product =>
    router.state &&
    state.products
      .filter(product => product.id === +router.state.params.productId)
      .shift()
);
