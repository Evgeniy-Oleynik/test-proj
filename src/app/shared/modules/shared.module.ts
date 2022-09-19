import { NgModule } from '@angular/core';

import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [
  ],
  imports: [],
  exports: [
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    // ReactiveFormsModule,
  ],
})
export class SharedModule { }
