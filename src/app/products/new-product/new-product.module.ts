import { NgModule } from "@angular/core";

import { SharedModule } from "../../shared/modules/shared.module";
import { CoreModule } from "../../shared/modules/core.module";
import { NewProductComponent } from "./new-product.component";
import { NewProductRoutingModule } from "./new-product-routing.module";
import { ProductEditorModule } from "../shared/product-editor/product-editor.module";

@NgModule({
  imports: [
    NewProductRoutingModule,
    SharedModule,
    CoreModule,
    ProductEditorModule,
  ],
  declarations: [ NewProductComponent ]
})
export class NewProductModule { }
