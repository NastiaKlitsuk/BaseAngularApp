import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getSelectedCategoryName, GlobalState } from '../store/global.state';

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.css"]
})
export class TopbarComponent implements OnInit {
  private _selectedCategory$: Observable<string>;
  constructor(private store: Store<GlobalState>) {}

  ngOnInit() {
    console.log("ngOnInit app-topbar");
    this._selectedCategory$ = this.store.select(getSelectedCategoryName);
  }
}
