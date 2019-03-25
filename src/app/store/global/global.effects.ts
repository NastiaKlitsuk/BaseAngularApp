import { Injectable } from "@angular/core";
import * as globalActions from "../global/global.actions";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ProductsService } from "../../services/products/products.service";
import { switchMap, map, catchError } from "rxjs/operators";
import { of } from "rxjs";

@Injectable()
export class GlobalEffects {
  constructor(
    private actions$: Actions<globalActions.GlobalActions>,
    private productsService: ProductsService
  ) {}

  @Effect()
  getProductById = this.actions$.pipe(
    ofType(globalActions.SELECT_PRODUCT),
    switchMap((action: globalActions.GlobalActions) => {
      let selectedProduct = action.payload;
      return this.productsService.getProductById(selectedProduct.id).pipe(
        map(product => new globalActions.ProductSelected(product)),
        catchError(error => of(new globalActions.ProductSelectedFail(error)))
      );
    })
  );
}
