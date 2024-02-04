import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/tmdb.service';
import { AuthService } from '../../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesPerPage = 20; 
  currentPage = 0; 
  pagesToShow: number = 1;
  totalResults = 25; 
  totalPages = 1; 
  selectedFilter = "all";
  pageArray: number[] = [];
  moviesData: any;
  constructor(private tmdbService : TMDBService , private authService:AuthService , private router:Router) {

   }

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    this.fetchMoviesFromJSON();
      this.authService.checkToken(token).subscribe((data:boolean)=>{
       if(data == false){
          localStorage.setItem('token' , "");
          this.router.navigate(['/login'])
      }

      });
    
  }

    getVisiblePages(): number[] {
      const halfPagesToShow = Math.floor(this.pagesToShow / 2);
      let startPage = Math.max(0, this.currentPage - halfPagesToShow);
      const endPage = Math.min(this.totalPages, startPage + this.pagesToShow - 1);

  
      if (endPage - startPage < this.pagesToShow - 1) {
        startPage = Math.max(1, endPage - this.pagesToShow + 1);
      }

  
      return Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);
    }

  fetchMoviesFromJSON(pageno?:number):void{


    this.tmdbService.getMovies(localStorage.getItem("token") , pageno , 20).subscribe(data => {
      this.moviesData = data.content;
      this.totalResults = data.pageable.totalElements;
      this.pageArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);

    });

  }


  filterChanged(filter:string):void{
    switch(filter){
      case "all" :  this.fetchMoviesFromJSON(); break;
    } 
    this.selectedFilter = filter;
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.fetchMoviesFromJSON(page);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchMoviesFromJSON(this.currentPage);
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.fetchMoviesFromJSON(this.currentPage);
    }
  }
  

}
