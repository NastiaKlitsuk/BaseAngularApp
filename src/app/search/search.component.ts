import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/product.model";
import { ProductsService } from "../services/products/products.service";

enum ProductsTableColumns {
  Name = "productName",
  Description = "productDescription",
  Price = "productPrice"
}

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  private _products$: Observable<Product[]>;
  readonly columnsToDisplay = [
    ProductsTableColumns.Name,
    ProductsTableColumns.Description,
    ProductsTableColumns.Price
  ];

  constructor(private productService: ProductsService) {
    this._products$ = this.productService.products$;
  }

  ngOnInit() {}
}
