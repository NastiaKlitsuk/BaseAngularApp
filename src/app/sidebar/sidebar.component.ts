import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { CATEGORY_NAMES } from "../model/categories.model";
import * as productsActions from "../store/products/products.actions";
import * as globalActions from "../store/global/global.actions";
import { GlobalState } from "../store/global/global.reducer";
import * as fromGlobal from "../store/global/global.actions";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  private _categoriesNames: string[];

  constructor(private store: Store<GlobalState>) {}

  ngOnInit() {
    this._categoriesNames = Object.values(CATEGORY_NAMES);
  }

  onMenuSelected(categoryName) {
    this.store.dispatch(new fromGlobal.CategorySelected(categoryName));
    this.store.dispatch(new productsActions.LoadProducts(categoryName));
    this.store.dispatch(new globalActions.ResetSelectedProduct());
  }
}
