import { NgModule } from "@angular/core";
import {SharedModule} from "../../../shared/modules/shared.module";
import {CoreModule} from "../../../shared/modules/core.module";
import {ProductEditorComponent} from "./product-editor.component";
import {ReactiveFormsModule} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    MatInputModule,
  ],
  exports: [
    ProductEditorComponent
  ],
  declarations: [ProductEditorComponent]
})
export class ProductEditorModule { }
