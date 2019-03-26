import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
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
import { SearchComponent } from "./search/search.component";
import { FormsModule } from "@angular/forms";

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    ContentComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
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
