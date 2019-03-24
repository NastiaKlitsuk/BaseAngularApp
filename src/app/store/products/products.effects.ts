import { Injectable } from "@angular/core";
import { GlobalState, getSelectedCategoryName } from "../global.state";
import { Store } from "@ngrx/store";
import { ProductsService } from "src/app/services/products/products.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as productsActions from "./products.actions";
import { switchMap, map, catchError } from "rxjs/operators";
import { CATEGORY_NAMES } from "../../model/categories.model";
import { of } from "rxjs";
import { getSelectedProduct } from "./products.reducer";
import { Product } from "../../model/product.model";

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

  @Effect()
  getProductById = this.actions$.pipe(
    ofType(productsActions.SELECT_PRODUCT),
    switchMap((action: productsActions.SelectProduct) => {
      let selectedProduct = action.payload
      return this.productsService.getProductById(selectedProduct.id).pipe(
        map(product => new productsActions.ProductSelected(product)),
        catchError(error => of(new productsActions.ProductSelectedFail(error)))
      );
    })
  );
}
