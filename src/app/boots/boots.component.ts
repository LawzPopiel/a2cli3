import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boots',
  templateUrl: './boots.component.html',
  styleUrls: ['./boots.component.scss']
})
export class BootsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

    public palettes: any = this.palettes = {
        "Purples": ['Violet', 'Magenta', 'Purple', 'SlateBlue', 'Indigo'],
        "Empty": [],
        "Greens": ['LimeGreen', 'SeaGreen', 'Green', 'OliveDrab', 'DarkOliveGreen'],
        "Reds": ['LightSalmon', 'Salmon', 'IndianRed', 'FireBrick', 'DarkRed']
    };
    public wrapStyle: any = { 'border':'1px solid gray', 'margin': '20px' , 'padding': '5px' , 'float': 'left', 'display': 'inline-block', 'width': '160px', 'min-height':'170px' };


}
