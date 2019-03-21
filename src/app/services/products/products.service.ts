import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, from } from "rxjs";
import { Product, PRODUCTS } from "../../model/product.model";
import { CATEGORY_NAMES } from "src/app/model/categories.model";
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  public products$: Observable<Product[]>;
  private _products: BehaviorSubject<Product[]>;

  constructor() {
    this._products = new BehaviorSubject<Product[]>(PRODUCTS);
    this.products$ = this._products.asObservable();
  }

  getProductsByCategoryName(categoryName: CATEGORY_NAMES) {
    console.log("getProductsByCategoryName", categoryName)
    console.log("getProductsByCategoryName", this._products.getValue())
    return this._products.pipe(
      delay(2000),
      map(products =>
        products.filter(product => product.categoryName === categoryName)
      )
    );
  }
}
