import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ProductsService } from "src/app/services/products/products.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as productsActions from "./products.actions";

import { switchMap, map, catchError } from "rxjs/operators";
import { CATEGORY_NAMES } from "../../model/categories.model";
import { of } from "rxjs";
import { Product } from "../../model/product.model";
import { getSelectedCategory, GlobalState } from "../global/global.reducer";

@Injectable()
export class ProductsEffects {
  private _selectedCategoryName: CATEGORY_NAMES;
  private _selectedProduct: Product;

  constructor(
    private actions$: Actions,
    private store: Store<GlobalState>,
    private productsService: ProductsService
  ) {
    this.store
      .select(getSelectedCategory)
      .subscribe(
        selectedCategoryName =>
          (this._selectedCategoryName = selectedCategoryName)
      );
  }

  @Effect()
  loadProductsByCategory$ = this.actions$.pipe(
    ofType(productsActions.LOAD_PRODUCTS),
    switchMap(() => {
      return this.productsService
        .getProductsByCategoryName(this._selectedCategoryName)
        .pipe(
          map(products => new productsActions.LoadProductsSuccess(products)),
          catchError(error => of(new productsActions.LoadProductsFail(error)))
        );
    })
  );

  @Effect()
  filterProductsBySearchQuery$ = this.actions$.pipe(
    ofType(productsActions.SEARCH_PRODUCTS),
    switchMap((action: productsActions.SearchProducts) => {
      return this.productsService.getProductsBySearchQuery(action.payload).pipe(
        map(products => new productsActions.LoadProductsSuccess(products)),
        catchError(error => of(new productsActions.LoadProductsFail(error)))
      );
    })
  );
}

