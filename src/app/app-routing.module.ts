import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: "category/:categoryName",
    component: ContentComponent,
    children: [{ path: "product/:productId", component: ContentComponent }]
  },
  {
    path: "search-products",
    component: SearchComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }) // <-- debugging purposes only
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
