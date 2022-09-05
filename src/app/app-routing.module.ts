import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from "./products/products.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {path:'', redirectTo:'/welcome', pathMatch:'full'},
  {path:'welcome', component: WelcomeComponent},
  {path:'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  {path:'details/:id', loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
