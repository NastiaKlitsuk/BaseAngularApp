import * as fromSidebar from "./sidebar.actions";
import * as fromGlobal from "../global.state";

export function sidebarReducer(
  state = fromGlobal.initialGlobalState,
  action: fromSidebar.SidebarActions
) {
  switch (action.type) {
    case fromSidebar.CATEGORY_SELECTED:
      let categoryName = action.payload;
      console.log("sidebarReducer: CATEGORY_SELECTED", categoryName);
      return {
        ...state,
        selectedCategoryName: categoryName
      };
  }
  return state;
}
