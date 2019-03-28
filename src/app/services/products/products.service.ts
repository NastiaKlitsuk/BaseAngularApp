import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject, from, of } from "rxjs";
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
    return this._products.pipe(
      map(products =>
        products.filter(product => product.categoryName === categoryName)
      )
    );
  }

  getProductById(id: number) {
    return this._products.pipe(
      map(products => products.filter(product => product.id === id).shift())
    );
  }

  getProductsBySearchQuery(searchQuery: string) {
    let lowerCaseSearchQuery = searchQuery.toLocaleLowerCase()
    return of(PRODUCTS.filter(product => product.name.toLocaleLowerCase().indexOf(lowerCaseSearchQuery) !== -1))
  }
}
