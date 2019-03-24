import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getSelectedCategoryName, GlobalState } from '../store/global.state';
import { appState } from '../store';
import { Product } from '../model/product.model';
import { getSelectedProduct } from '../store/products/products.reducer';

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  private _selectedCategory$: Observable<string>;
  private _selectedProduct$: Observable<Product>;

  constructor(private store: Store<appState>) {}

  ngOnInit() {
    console.log("ngOnInit app-topbar");
    this._selectedCategory$ = this.store.select(getSelectedCategoryName);
    this._selectedProduct$ = this.store.select(getSelectedProduct)
  }
}
