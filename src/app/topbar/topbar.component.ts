import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Product } from '../model/product.model';
import { getSelectedCategory, GlobalState } from '../store/global/global.reducer';
import { getSelectedProduct } from '../store/global/global.selectors';
import * as productsActions from '../store/products/products.actions'

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  private _selectedCategory$: Observable<string>;
  private _selectedProduct$: Observable<Product>;

  constructor(private store: Store<GlobalState>) {}

  ngOnInit() {
    console.log("ngOnInit app-topbar");
    this._selectedCategory$ = this.store.select(getSelectedCategory);
    this._selectedProduct$ = this.store.select(getSelectedProduct)
  }

  searchProducts(searchQuery: string)
  {
    this.store.dispatch(
      new productsActions.SearchProducts(searchQuery)
    );
  }
}
