import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import {Product} from "../../interfaces/product-interface";

@State<Product[]>({
  name: 'products',
  defaults: [],
})

@Injectable() export class ProductsState {
  constructor() {
  }


}
