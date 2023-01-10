import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-inside-view',
  templateUrl: './inside-view.component.html',
  styleUrls: ['./inside-view.component.scss']
})
export class InsideViewComponent implements OnInit {

  audio: HTMLAudioElement = new Audio()
  volume: number = 5;
  sendOperation: Subject<string> = new Subject<string>()

  constructor() { }

  ngOnInit(): void {
  }

  operateElevator(value: string){
    this.sendOperation.next(value)
  }

  playMusic(){
    this.audio.src = "../../assets/elevatorMusic.mp3";
    this.audio.load();
    this.audio.loop = true;
    this.changeVolume();
    this.audio.play();
  }

  stopMusic(){
    this.audio.pause()
    this.audio.currentTime = 0
  }

  changeVolume(){
    this.audio.volume = this.volume / 100
  }

}
