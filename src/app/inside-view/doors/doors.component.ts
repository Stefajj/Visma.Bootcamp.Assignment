import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ElevatorService } from '../elevatorService/elevator.service';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit {

  @Input() operation!: Subject<string>;

  status: 'opening' | 'closing' | 'open' | 'closed' = 'open';

  disabled: boolean = false;
  started: boolean = false;
  @ViewChild('leftPart') leftPart!: ElementRef;
  @ViewChild('rightPart') rightPart!: ElementRef;

  floors: any = [
    //https://i1.wp.com/www.paradyz.com/blog/wp-content/uploads/2018/02/aranzacja-jasnego-wnetrza-neve-ceramika-paradyz.jpg?fit=1280%2C1024&ssl=1
    {floor: 0, img: 'assets/00.jpg'},
    //https://vibia-pro-content.s3.eu-west-1.amazonaws.com/cms/productos/eur/flat/tec/slide/flat_tec_slide_08.jpg
    {floor: 1, img: 'assets/01.jpg'},
    //https://images.ctfassets.net/9mt55bm0937w/1VhXxVR2AP6jpbAaXKdr4I/6ba92dd0b690f2b59fc2caae3991504f/Key-Visual_Flexible-Office_Frankfurt_Wiesenh__ttenplatz.jpg
    {floor: 2, img: 'assets/02.jpg'},
    //https://vibia-pro-content.s3.eu-west-1.amazonaws.com/cms/productos/eur/flat/tec/slide/flat_tec_slide_03.jpg
    {floor: 3, img: 'assets/03.jpg'},
    //https://cdm.fi/wp-content/uploads/2020/09/CDM-Visma-Helsinki-logo.jpg
    {floor: 4, img: 'assets/04.jpg'}
  ];
  
  constructor(private hostElement: ElementRef,private elevator:ElevatorService) {
    this.hostElement.nativeElement.style.backgroundImage = `url('${this.floors[0].img}')`;
    this.hostElement.nativeElement.style.backgroundSize = 'auto 450px'
  }

  ngOnInit(): void {
    this.operation.subscribe((action)=>{
      if(action == "Open"){
        this.open()
      }else if(action == "Close"){
        this.close()
      }else{
        let number = Number(action)
        if(number >= 0 && number <=4){
          this.activateButton(number)
        }
      }
    })
  }

  open(){
    if(!this.disabled && this.status!='open' && this.started==false){
      this.disabled=true
      this.status='opening'
      setTimeout(()=>{
        this.disabled=false;
        this.status='open';
      },3000)
    }
  }

  close(){
    if(!this.disabled && this.status!='closed'){
      this.disabled=true
      this.status='closing'
      setTimeout(()=>{
        this.disabled=false;
        this.status='closed';
      },3000)
    }
  }

  activateButton(floor: number){
    if(this.elevator.currentFloor==floor){
      return;
    }
    console.log(floor)
    if(!this.elevator.selectedFloors.includes(floor)){
      this.elevator.selectedFloors.push(floor)
    }
    if(!this.started){
      this.switchFloor()
    }
    console.log(this.elevator.selectedFloors)
  }

  switchFloor(){
    this.started=true;

    if(this.status=='closed'){
      
      let closest = this.elevator.selectedFloors.reduce((prev,curr)=>{
        return (Math.abs(curr - this.elevator.currentFloor) < Math.abs(prev - this.elevator.currentFloor) ? curr : prev);
      })
      this.changeBackgroundImg(closest);
      this.elevate(closest)
    }else{
      this.close()
      setTimeout(()=>{this.switchFloor()},3000)
    }
  }

  elevate(closest:number){
    if(closest != this.elevator.currentFloor){
      setTimeout(()=>{
        if(closest>this.elevator.currentFloor)
          this.elevator.currentFloor++;
        else
          this.elevator.currentFloor--;
        this.elevate(closest)
      },2000)
    }else{
      console.log('Done');
      let idx = this.elevator.selectedFloors.indexOf(closest)
      if (idx !== -1) {
        this.elevator.selectedFloors.splice(idx, 1);
      }
      this.started=false;
      this.open();
      if(this.elevator.selectedFloors.length>0){
        this.switchFloor()
      }
    }
  }

  changeBackgroundImg(floor:number){
    this.hostElement.nativeElement.style.backgroundImage = `url('${this.floors[floor].img}')`;
  }
}
