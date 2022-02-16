import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input()
  currentGroup!: string[];

  @Input()
  index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
