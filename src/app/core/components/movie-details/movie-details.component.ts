import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TMDBService } from '../../services/tmdb.service';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'] 
})
export class MovieDetailsComponent implements OnInit {
  imageUrl : string= environment.imageUrl
  imageExtentsion : string= ".jpg"
  public movie:any;
  constructor(private route:ActivatedRoute, private tmdbservice:TMDBService) { 
   this.route.params.subscribe(
     param => {
       
        param["id"] ? this.tmdbservice.getById(localStorage.getItem("token") , param["id"]).subscribe(data=>this.movie=data) : ""        
     }
   );
  }

  ngOnInit(): void {
  }

  

}
