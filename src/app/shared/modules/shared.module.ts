import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";

import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    HttpClientModule,
  ],
})
export class SharedModule { }
