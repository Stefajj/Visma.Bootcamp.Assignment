import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  @Output() onButtonPressed = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  buttonPressed(event: any){
    let target = event.target as HTMLButtonElement
    this.onButtonPressed.emit(target.innerHTML)
    target.classList.add('pressed')
  }

}
