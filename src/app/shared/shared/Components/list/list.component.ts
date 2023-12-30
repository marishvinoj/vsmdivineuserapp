import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges, OnDestroy {
  @Input()  HeadArray: any[] = [];
  @Input() GridArray: any[] = [];
  @Input() requiredDateRange = false;
  @Input() title = '';
  @Input() Show: boolean = true;
  Hide: boolean = !this.Show;
  @ViewChild('dt') dataTable!: ElementRef;
  @Input() message: string|undefined; 

  list: any[] = [];

  public first = 0;
  public nextCol = this.first;
  public showCols = 4;
  public last = this.HeadArray?.length;
  public item: any;
  public selectedItem: any;
  keys: any[] = [];

  public newItem = false;

  @Output() itemSelected: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router){}

  ngOnChanges(changes: SimpleChanges): void {
    this.keys= Object.keys(this.GridArray[0]);
    this.list = this.GridArray;
    if (changes['GridArray']) {
    }
  }

  ngOnInit(): void { 
    console.log('GridArray ', this.GridArray);
    console.log('HeadArray ', this.HeadArray);
  }

  ngOnDestroy(): void { 
  } 

  public onRowSelect(event : any): void {
    alert("onRowSelect");
    this.newItem = true;
    this.item = event.data;
    this.itemSelected.emit(this.item);
  }

  public onRowUnselect(event : any): void {
    alert("onRowUnselect");
    this.item = null;
    this.newItem = false;
    this.itemSelected.emit(null);
  }

  edit(_cmd: string, _obj: any) {
    var obj = {_obj: Object, cmd: _cmd};
    this.itemSelected.emit(obj);
    let id:Number = _obj.Id;
    this.router.navigate([this.message, id]);
  }

  delete(obj: any) {
    alert("delete");
  }

  newRow(){
     return JSON.stringify("");
  }

  public next(): void {
    this.nextCol++;
    this.showCols++;
  }

  public prev(): void {
    this.nextCol--;
    this.showCols--;
  }

  public firstColumn(): boolean {
    return this.nextCol === this.first;
  }

  public lastColumn(): boolean {
    return this.last / this.nextCol <= 4;
  }

}
