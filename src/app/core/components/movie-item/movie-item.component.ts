import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

export class MovieItemComponent implements OnInit {
  @Input() movie:any;
  imageUrl : string= environment.imageUrl
  constructor(private router: Router) { 
  }

  ngOnInit(): void {

  }
  goToDetils(id:any) : void{
    this.router.navigate([`/movie/${id}`]);

  }

}
