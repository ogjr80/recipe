import { Component, OnInit } from '@angular/core';

import {Recipe} from "./recipe"; 

@Component({
  selector: 'rb-recipies',
  templateUrl: './recipies.component.html'
})
export class RecipiesComponent implements OnInit {

  selectedREcipe: Recipe; 
  constructor() { }

  ngOnInit() {
  }

}
