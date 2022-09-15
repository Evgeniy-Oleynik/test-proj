import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailsComponent } from "./product-details.component";
import {ProductDetailsResolverService} from "./product-details-resolver.service";

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent,
    resolve: { product: ProductDetailsResolverService},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
