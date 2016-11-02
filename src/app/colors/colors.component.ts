import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
    private showSeries: boolean = false;
    private showTransitions: boolean = true;
    private legendVisible: boolean = true;
    private chartTitle1: any = { text: 'Drilling / Completion' };
    private chartTitle2: any = { text: 'Coefficient Spread ' };
}



