import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from "./products.component";
import {ProductDetailsResolverService} from "./product-details/product-details-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule),
    resolve: { product: ProductDetailsResolverService},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
