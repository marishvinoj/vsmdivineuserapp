import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.scss'
})
export class AddComponent {
  @Input() url: string|undefined; 

  constructor(private router: Router) {

  }

  add(){
    alert(this.url);
    this.router.navigate([this.url]);
  }
}
