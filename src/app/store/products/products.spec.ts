import * as fromProductsState from './products.selectors';
import * as fromProductsReducer from './products.reducer';
import { PRODUCTS } from 'src/app/model/product.model';
import * as productsActions from './products.actions';
import { CATEGORY_NAMES } from 'src/app/model/categories.model';
import { getActions, TestActions } from '../../testing/actions-stub';
import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { hot, cold } from 'jasmine-marbles';
import { ProductsEffects } from './products.effects';
import { ProductsService } from 'src/app/services/products/products.service';
import { Store } from '@ngrx/store';
import { TestStore } from 'src/app/testing/test-store';

describe('Products selectors', () => {
  const state = {
    products: PRODUCTS,
    loaded: true,
    loading: false
  };
  it('should return all the products', () => {
    const allProducts = fromProductsReducer.getProductsData(state);
    expect(allProducts.length).toBe(9);
  });

  it('should return all the products (projector)', () => {
    const allProducts = fromProductsState.getProducts.projector(state);
    expect(allProducts.length).toBe(9);
  });
});

describe('Products Effects - loadProductsByCategory$', () => {
  let actions$: TestActions;
  let productsEffects: ProductsEffects;
  let productsServiceSpy: jasmine.SpyObj<ProductsService>;

  beforeEach(() => {
    productsServiceSpy = jasmine.createSpyObj('ProductsService', [
      'getProductsByCategoryName'
    ]);

    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        {
          provide: Actions,
          useFactory: getActions
        },
        {
          provide: ProductsService,
          useValue: productsServiceSpy
        },
        {
          provide: Store,
          useClass: TestStore,
        }
      ]
    });
    actions$ = TestBed.get(Actions);
    productsEffects = TestBed.get(ProductsEffects);
  });

  it('should return LoadProductsSuccess action, with the outcome, on success', () => {
    const loadHomeCategoryProductsAction = new productsActions.LoadProducts(
      CATEGORY_NAMES.HOME
    );
    const homeCategoryProducts = PRODUCTS.filter(product => product.categoryName === CATEGORY_NAMES.HOME);
    const completion = new productsActions.LoadProductsSuccess(homeCategoryProducts);

    actions$.stream = hot('-a', { a: loadHomeCategoryProductsAction });
    const products = cold('-b|', { b: homeCategoryProducts });
    const expected = cold('--c', { c: completion });

    productsServiceSpy.getProductsByCategoryName.and.returnValue(products);
    expect(productsEffects.loadProductsByCategory$).toBeObservable(expected);
  });
});
