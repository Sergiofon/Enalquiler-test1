import { Component, OnInit, Input } from '@angular/core';
import { Timestamp } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() name: string;
  @Input() id: string;
  @Input() date: Timestamp<any>;
  
  constructor() { }

  ngOnInit() {
  }

}
