import { NgModule } from "@angular/core";

import { ProductDetailsComponent } from "./product-details.component";
import { ProductDetailsRoutingModule } from "./product-details-routing.module";
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from "../../shared/modules/shared.module";
import { CoreModule } from "../../shared/modules/core.module";
import { ProductEditorModule } from "../shared/product-editor/product-editor.module";

@NgModule({
  imports: [
    ProductDetailsRoutingModule,
    SharedModule,
    CoreModule,
    ProductEditorModule,
  ],
  declarations: [ProductDetailsComponent]
})
export class ProductDetailsModule { }
