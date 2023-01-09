import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.scss']
})
export class DoorsComponent implements OnInit {

  opened : boolean = false;
  @ViewChild('leftPart') leftPart!: ElementRef;
  @ViewChild('rightPart') rightPart!: ElementRef;
  
  constructor() {
  }

  ngOnInit(): void {
  }

  toggle(){
    this.opened=!this.opened;
  }


}
