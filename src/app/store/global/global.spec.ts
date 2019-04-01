import * as fromGlobal from "./global.reducer";
import { CategorySelected } from "./global.actions";
import { CATEGORY_NAMES } from "src/app/model/categories.model";
import * as fromGlobalState from "./global.selectors";
import { PRODUCTS } from "src/app/model/product.model";

describe("Reducers - Global State Changes", () => {
  it("should have an initial state", () => {
    const state = fromGlobal.globalReducer(
      fromGlobal.initialGlobalState,
      "@@init" as any
    );
    expect(state).toBe(fromGlobal.initialGlobalState);
  });

  it("selected category name changed when a new category was selected", () => {
    const init = { action: "@@init" } as any;
    const categorySelected = new CategorySelected(CATEGORY_NAMES.ART);
    const expectedState = {
      selectedCategoryName: CATEGORY_NAMES.ART
    };

    const state = [init, categorySelected].reduce(
      fromGlobal.globalReducer,
      fromGlobal.initialGlobalState
    );

    //TODO: Is there a use of snapshots?
    expect(state).toEqual(expectedState);
  });
});

describe("Global Selectors", () => {
  it("should return product with id 1", () => {
    const productsState = { products: PRODUCTS, loaded: true, loading: false };
    const expectedProduct = {
      id: 1,
      name: "The First Years Stack Up Cups",
      description: "Eligible for Shipping to Israel",
      price: 15,
      categoryName: CATEGORY_NAMES.TOYS,
      image: "./assets/cups.jpg"
    };
    const router = {
      state: {
        url: "/category/ART/product/1",
        queryParams: {},
        params: { productId: 1 }
      }
    };

    const selectedProduct = fromGlobalState.getSelectedProduct.projector(
      productsState,
      router
    );

    expect(selectedProduct).toEqual(expectedProduct);
  });
});
