import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ProductsState } from "../store/products/products.reducer";
import { Store } from "@ngrx/store";
import * as productsActions from "../store/products/products.actions";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  private searchQueryString: string;

  constructor(private store: Store<ProductsState>) {}

  ngOnInit() {}

  search() {
    this.store.dispatch(
      new productsActions.SearchProducts(this.searchQueryString)
    );
  }
}
