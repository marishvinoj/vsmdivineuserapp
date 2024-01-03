import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AddComponent } from '../Components/add/add.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AddComponent],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    MenubarModule
  ],
  exports: [
    TableModule,
    DropdownModule,
    MultiSelectModule,
    MenubarModule
  ]
})
export class SharedModule { }
