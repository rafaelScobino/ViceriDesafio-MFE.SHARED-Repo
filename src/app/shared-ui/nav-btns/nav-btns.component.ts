import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ɵEmptyOutletComponent } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-btns',
  standalone:true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './nav-btns.component.html',
  styleUrl: './nav-btns.component.scss'
})
export class NavBtnsComponent {
@Input() isBegin: boolean = true;
@Input() isSubmit: boolean = false;
@Input() canSubmit: boolean = false;

@Output() back: EventEmitter<void> = new EventEmitter();
@Output() next: EventEmitter<void> = new EventEmitter();
@Output() submit: EventEmitter<void> = new EventEmitter();


_back():void{
  console.log('back')
  return this.back.emit();
}

_next():void{
  console.log('next')
  return this.next.emit();
}

_submit():void{
  console.log('submit')
  this.submit.emit();
}


}
