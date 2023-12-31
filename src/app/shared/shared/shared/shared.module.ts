import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AddComponent } from '../Components/add/add.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AddComponent],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  exports: [
    TableModule,
    DropdownModule
  ]
})
export class SharedModule { }
