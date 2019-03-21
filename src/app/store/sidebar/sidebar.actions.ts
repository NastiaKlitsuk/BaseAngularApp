import { Action } from "@ngrx/store";

export const CATEGORY_SELECTED = "[Sidebar] Category Selected";

export class CategorySelected implements Action {
  readonly type = CATEGORY_SELECTED;
  constructor(public payload: string) {}
}

export type SidebarActions = CategorySelected
