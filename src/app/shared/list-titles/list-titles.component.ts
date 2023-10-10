import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-titles',
  templateUrl: './list-titles.component.html',
  styleUrls: ['./list-titles.component.scss']
})
export class ListTitlesComponent implements OnInit {

  @Input()titleSession: string | undefined;

  @Input()list: any[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
