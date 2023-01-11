import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { ElevatorService } from '../elevatorService/elevator.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.scss']
})
export class ControllerComponent implements OnInit {

  @Output() onButtonPressed = new EventEmitter<string>()
  selectedFloors: number[] = []

  constructor(private elevator: ElevatorService) {

    elevator.selectedFloorsSubject.subscribe((selectedFloors)=>{
      //Ak pribudlo nové tlačidlo v aktivovaných, rozsviet ho. Ak ubudlo tlačidlo z aktivovaných, vypni ho.
      if(selectedFloors.length>this.selectedFloors.length){
        let floorNum = selectedFloors.filter(x => !this.selectedFloors.includes(x));
        this.activateButton(floorNum[0])
      }else{
        let floorNum = this.selectedFloors.filter(x => !selectedFloors.includes(x));
        this.switchOffButton(floorNum[0])
      }
      this.selectedFloors=selectedFloors
    })
  }

  ngOnInit(): void {
  }

  //rozsvietenie tlacidla
  activateButton(numberOfButton: number){
    document.getElementById(numberOfButton?.toString())?.classList.add('pressed')
  }

  //vypnutie tlacidla
  switchOffButton(numberOfButton: number){
    document.getElementById(numberOfButton?.toString())?.classList.remove('pressed')
  }

  //pri stlačení tlačidla
  buttonPressed(event: any){
    let target = event.target as HTMLButtonElement
    this.onButtonPressed.emit(target.innerHTML)
  }

}
