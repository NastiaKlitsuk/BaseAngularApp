import { Component, OnInit } from "@angular/core";
import { CATEGORY_NAMES } from "../model/categories.model";
import { Store } from "@ngrx/store";
import * as SidebarActions from "../store/sidebar/sidebar.actions";
import * as ProductsActions from "../store/products/products.actions"
import { GlobalState } from "../store/global.state";

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
    this.store.dispatch(new SidebarActions.CategorySelected(categoryName));
    this.store.dispatch(new ProductsActions.LoadProducts(categoryName))
  }
}

//TODO: how to deal with the usecase when the user selects another category, and I want to clear the products content?