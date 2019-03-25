import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { TopbarComponent } from "./topbar/topbar.component";
import { ContentComponent } from "./content/content.component";
import { allReducers } from "./store";

import { StoreModule } from "@ngrx/store";
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from "@ngrx/router-store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { ProductsEffects } from "./store/products/products.effects";
import { CustomSerializer } from "./store/router/router.reducer";

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    CommonModule,
    StoreModule.forRoot(allReducers, {
      metaReducers: [],
      initialState: {
        router: {
          state: {
            url: window.location.pathname,
            params: {},
            queryParams: {}
          },
          navigationId: 0
        }
      }
    }),
    EffectsModule.forRoot([ProductsEffects]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
