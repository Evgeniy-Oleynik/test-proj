import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "./products.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatTableModule,
    MatIconModule,
  ],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
