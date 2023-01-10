import { Component, OnDestroy, OnInit } from '@angular/core';
import { ElevatorService } from '../elevatorService/elevator.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-level-indicator',
  templateUrl: './level-indicator.component.html',
  styleUrls: ['./level-indicator.component.scss']
})
export class LevelIndicatorComponent implements OnInit, OnDestroy {

  currentFloor!: number;
  sub!: Subscription;

  constructor(private elevator: ElevatorService) {
    this.currentFloor=elevator.currentFloor;
    this.sub = elevator.currentFloorSubject.subscribe((floor)=>{
      this.currentFloor=floor;
    })
  }
  ngOnInit(): void {
  }
  
  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

}
