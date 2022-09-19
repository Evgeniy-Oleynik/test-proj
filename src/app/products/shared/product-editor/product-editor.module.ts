import { NgModule } from "@angular/core";
import {SharedModule} from "../../../shared/modules/shared.module";
import {CoreModule} from "../../../shared/modules/core.module";
import {ProductEditorComponent} from "./product-editor.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    ReactiveFormsModule,
  ],
  exports: [
    ProductEditorComponent
  ],
  declarations: [ProductEditorComponent]
})
export class ProductEditorModule { }
