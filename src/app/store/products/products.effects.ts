import { Injectable } from "@angular/core";
import { GlobalState, getSelectedCategoryName } from "../global.state";
import { Store } from "@ngrx/store";
import { ProductsService } from "src/app/services/products/products.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as productsActions from "./products.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { CATEGORY_NAMES } from "../../model/categories.model";
import { of } from "rxjs";

@Injectable()
export class ProductsEffects {
  private _selectedCategoryName: CATEGORY_NAMES;

  constructor(
    private actions$: Actions,
    private store: Store<GlobalState>,
    private productsService: ProductsService
  ) {
    this.store
      .select(getSelectedCategoryName)
      .subscribe(
        selectedCategoryName =>
          (this._selectedCategoryName = selectedCategoryName)
      );
  }

  @Effect()
  loadProductsByCategory = this.actions$.pipe(
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
}
