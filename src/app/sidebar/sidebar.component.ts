import { Component, OnInit } from "@angular/core";

export interface Tab {
  name: string;
}

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  private _tabs: Tab[];

  constructor() {}

  ngOnInit() {
    this._tabs = [
      { name: "HOME" },
      { name: "GARDEN" },
      { name: "CLOTHES" },
      { name: "TOYS" }
    ];
  }
}
