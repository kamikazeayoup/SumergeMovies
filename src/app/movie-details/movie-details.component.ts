import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../class/movie';
import { TMDBService } from '../service/tmdb.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie:any;
  constructor(private route:ActivatedRoute, private tmdbservice:TMDBService) { 
   this.route.params.subscribe(
     param => {
       
        param["id"] ? this.tmdbservice.getById(param["id"]).subscribe(data=>this.movie=data) : ""; 
       
     }
   );
  }

  ngOnInit(): void {
  }

  trim(str:string):string{
    return str.replace(/ /g,"");
  }

}
