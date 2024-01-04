import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AddComponent } from '../Components/add/add.component';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { MenubarModule } from 'primeng/menubar';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    MenubarModule
  ],
  providers:[DatePipe],
  exports: [
    TableModule,
    DropdownModule,
    MultiSelectModule,
    MenubarModule,
    DatePipe
  ]
})
export class SharedModule { }
