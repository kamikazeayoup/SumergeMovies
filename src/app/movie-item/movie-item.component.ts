import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie:any;
  constructor() { }

  ngOnInit(): void {
  }

}
