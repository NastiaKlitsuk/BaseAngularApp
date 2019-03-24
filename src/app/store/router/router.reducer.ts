import * as fromRouter from "@ngrx/router-store";
import {
  Params,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { createFeatureSelector } from "@ngrx/store";

export interface RouterState {
  url: string;
  queryParams: Params;
  params: Params;
}

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterState>
>("router");

export class CustomSerializer
  implements fromRouter.RouterStateSerializer<RouterState> {
  serialize(routerState: RouterStateSnapshot) {
    const { url } = routerState;
    const { queryParams } = routerState.root;

    let state: ActivatedRouteSnapshot = routerState.root;
    while (state.firstChild) {
      state = state.firstChild;
    }

    let { params } = state;

    return { url, queryParams, params };
  }
}
