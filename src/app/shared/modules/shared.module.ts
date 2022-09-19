import { NgModule } from '@angular/core';

import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { ReactiveFormsModule } from "@angular/forms";
import {ProductEditorComponent} from "../../products/shared/product-editor/product-editor.component";



@NgModule({
  declarations: [
    ProductEditorComponent
  ],
  imports: [],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    ProductEditorComponent,
  ],
})
export class SharedModule { }
