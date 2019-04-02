import { TestBed } from '@angular/core/testing';

import { ProductsService } from './products.service';
import { CATEGORY_NAMES } from 'src/app/model/categories.model';

describe('ProductService', async () => {
  let productsService: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ProductsService] });
    productsService = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(productsService).toBeTruthy();
  });

  it('should return products of the category TOYS', () => {
    const expectedProducts = [
      {
        id: 1,
        name: 'The First Years Stack Up Cups',
        description: 'Eligible for Shipping to Israel',
        price: 15,
        categoryName: CATEGORY_NAMES.TOYS,
        image: './assets/cups.jpg'
      },
      {
        id: 2,
        name: 'Mega Bloks 80-Piece Big Building Bag, Classic',
        description:
          'Eligible for Shipping to Israel, Ages: 12 months - 5 years',
        price: 50,
        categoryName: CATEGORY_NAMES.TOYS,
        image: './assets/mega-blocks.jpg'
      }
    ];

    productsService
      .getProductsByCategoryName(CATEGORY_NAMES.TOYS)
      .subscribe(
        products =>
          expect(products).toEqual(
            expectedProducts,
            'the products are not equal'
          ),
        fail
      );
  });

  it('should return product with id 1', () => {
    let expectedProduct = {
      id: 1,
      name: 'The First Years Stack Up Cups',
      description: 'Eligible for Shipping to Israel',
      price: 15,
      categoryName: CATEGORY_NAMES.TOYS,
      image: './assets/cups.jpg'
    };

    productsService
      .getProductById(1)
      .subscribe(product => expect(product).toEqual(expectedProduct), fail);
  });

  it('should return undefined for the product id 1000', () => {
    let expectedResult = undefined;

    productsService
      .getProductById(1000)
      .subscribe(product => expect(product).toEqual(expectedResult), fail);
  });

  it('should return one product for the searchQuery=dress', () => {
    let expectedProduct = [
      {
        id: 3,
        name: "GRECERELLE Women's Casual Loose Pocket Long Dress",
        description: 'Short Sleeve Split Maxi Dresses',
        price: 850,
        categoryName: CATEGORY_NAMES.CLOTHES,
        image: './assets/dress.jpg'
      }
    ];

    productsService
      .getProductsBySearchQuery('dress')
      .subscribe(products => expect(products).toEqual(expectedProduct), fail);
  });
});
