import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";

const routes: Routes = [
  { path: "category/:categoryName", component: ContentComponent },
  { path: "product/:id", component: ContentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true }) // <-- debugging purposes only
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
