import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Product } from "./interfaces/product-interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const productsData = [
      { id: 1, name: 'Product 1', description: 'Description 1', price: 1, count:2 },
      { id: 2, name: 'Product 2', description: 'Description 2', price: 2, count:3 },
      { id: 3, name: 'Product 3', description: 'Description 3', price: 3, count:4 },
      { id: 4, name: 'Product 4', description: 'Description 4', price: 5, count:7 },
      { id: 5, name: 'Product 5', description: 'Description 5', price: 8, count:5 },
      { id: 6, name: 'Product 6', description: 'Description 6', price: 13, count:4 },
      { id: 7, name: 'Product 7', description: 'Description 7', price: 21, count:3 },
      { id: 8, name: 'Product 8', description: 'Description 8', price: 34, count:2 },
    ];
    return {productsData};
  }

  genId(productsData: Product[]): number {
    return productsData.length > 0 ? Math.max(...productsData.map(product => product.id)) + 1 : 1;
    // return productsData.length > 0 ? productsData[-1].id + 1 : 1;
    // alternate, ask Katya
  }

  constructor() { }
}
