import { Input , Component, OnInit } from '@angular/core';

@Component({
  selector: 'movies-container',
  templateUrl: './movies-container.component.html',
  styleUrls: ['./movies-container.component.css']
})
export class MoviesContainerComponent implements OnInit {

  @Input() movies : any;

  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
