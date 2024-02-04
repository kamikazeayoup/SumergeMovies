import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})

export class MovieItemComponent implements OnInit {
  @Input() movie:any;
  imageUrl : string= environment.imageUrl
  imageExtentsion : string= ".jpg"

  constructor(private router: Router , private route : ActivatedRoute) { 
  }

  ngOnInit(): void {

  }

  //relative instead of using the '/movie'
  goToDetils(id:any) : void{
    this.router.navigate([id], {relativeTo: this.route} );

  }

}
