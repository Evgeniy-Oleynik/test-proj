import {Component, OnInit, ViewChild} from '@angular/core';
import { Product } from "../interfaces/product-interface";
import { ProductsData } from "../mock-data";
import { ProductsModule } from "./products.module";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData = ProductsData;
  displayedColumns: string[] = ['name', 'description', 'price', 'count', 'total'];
  displayedFooter: string[] = ['totalSum1', 'totalSum2'];


  constructor() { }

  ngOnInit(): void {
  }

  getTotalSum() {
    return this.productsData.map(p => p.price * p.count).reduce((acc, value) => acc + value, 0);
  }
}
