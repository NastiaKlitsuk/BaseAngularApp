import { Component, OnInit } from "@angular/core";
import { ProductsState, getProducts } from "../store/products/products.reducer";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";
import * as productsActions from "../store/products/products.actions";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  private _products$: Observable<Product[]>;
  constructor(private store: Store<ProductsState>) {}

  ngOnInit() {
    this._products$ = this.store.select(getProducts);
  }

  onProductSelected(product: Product) {
    console.log("onProductSelected", product)
    this.store.dispatch(new productsActions.SelectProduct(product));
  }
}
