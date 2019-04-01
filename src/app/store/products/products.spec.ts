import * as fromProductsState from "./products.selectors";
import * as fromProductsReducer from "./products.reducer";
import { PRODUCTS } from "src/app/model/product.model";

describe("Products selectors", () => {
  const state = {
    products: PRODUCTS,
    loaded: true,
    loading: false
  };
  it("should return all the products", () => {
    const allProducts = fromProductsReducer.getProductsData(state);
    expect(allProducts.length).toBe(9);
  });

  it("should return all the products (projector)", () => {
    const allProducts = fromProductsState.getProducts.projector(state);
    expect(allProducts.length).toBe(9);
  });
});
