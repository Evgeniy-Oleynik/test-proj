import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from "./products.component";
import {ProductDetailsResolverService} from "./product-details/product-details-resolver.service";
import {ProductsResolverService} from "./products-resolver.service";
import {NewProductComponent} from "./new-product/new-product.component";

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    resolve: {products: ProductsResolverService}
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule),
  },
  {
    path: 'new',
    component: NewProductComponent,
    loadChildren: () => import('./new-product/new-product.module').then(m => m.NewProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
