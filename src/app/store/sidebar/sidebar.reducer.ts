import * as fromSidebar from "./sidebar.actions";
import * as fromGlobal from "../global.state";

export function sidebarReducer(
  state = fromGlobal.initialGlobalState,
  action: fromSidebar.SidebarActions
) {
  switch (action.type) {
    case fromSidebar.CATEGORY_SELECTED:
      let categoryName = action.payload;
      console.log("action.payload", action.payload)
      console.log("sidebarReducer: CATEGORY_SELECTED", categoryName);
      let newState = {
        ...state,
        selectedCategoryName: categoryName
      };
      console.log("newState", newState);
      return newState;
  }
  return state;
}
