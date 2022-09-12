import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { ProductsResolverService } from "./products/products-resolver.service";


const routes: Routes = [
  {path:'', redirectTo:'/welcome', pathMatch:'full'},
  {path:'welcome', component: WelcomeComponent},
  {
    path:'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
    resolve: {products: ProductsResolverService}
  },
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
