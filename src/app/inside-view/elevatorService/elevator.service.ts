import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ElevatorService {

  private _currentFloor: number = 0
  currentFloorSubject: Subject<number> = new Subject<number>;
  private _selectedFloors: number[] = []
  selectedFloorsSubject: Subject<number[]> = new Subject<number[]>;

  constructor() { }

  set currentFloor(floor:number){
    this.currentFloorSubject.next(floor)
    this._currentFloor = floor;
  }

  get currentFloor(){
    return this._currentFloor;
  }

  set selectedFloors(floors: number[]){
    this.selectedFloorsSubject.next(floors)
    this._selectedFloors = floors;
  }

  get selectedFloors(){
    return this._selectedFloors;
  }
}
