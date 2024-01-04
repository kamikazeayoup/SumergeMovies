import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../service/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesPerPage = 20; // Define the number of movies per page
  currentPage = 1; // Initialize the current page to 1
  pagesToShow: number = 6;
  totalResults = 4094; // Total number of movies from API response
  totalPages = 0; // Array to store the total pages for pagination
  selectedFilter = "all";
  pageArray: number[] = [];



  errorMessage = "";
  moviesData: any;
  constructor(private tmdbService : TMDBService) { }

  ngOnInit(): void {
    this.fetchMoviesFromJSON();
  }

    getVisiblePages(): number[] {
      const halfPagesToShow = Math.floor(this.pagesToShow / 2);
      let startPage = Math.max(1, this.currentPage - halfPagesToShow);
      const endPage = Math.min(this.totalPages, startPage + this.pagesToShow - 1);
  
      // Adjust startPage when nearing the end to always show `pagesToShow` pages
      if (endPage - startPage < this.pagesToShow - 1) {
        startPage = Math.max(1, endPage - this.pagesToShow + 1);
      }
  
      return Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);
    }

  fetchMoviesFromJSON(pageno?:number):void{


    this.tmdbService.getTopRatedMovies(pageno).subscribe(data => {
      this.moviesData = data;
      this.totalPages = data.total_pages;
      this.totalResults = data.total_results;
      this.pageArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);

      console.log(this.moviesData)


    });

  }

  displayMovie(movie:any):void{
    this.errorMessage = "";
    if (movie.Error){
      this.errorMessage = movie.Error;
      return;
    }
   
    
  }

  filterChanged(filter:string):void{
    switch(filter){
      case "all" :  this.fetchMoviesFromJSON(); break;
    } 
    this.selectedFilter = filter;
  }

  goToPage(page: number): void {
    this.currentPage = page;
    console.log(page)
    this.fetchMoviesFromJSON(page);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.fetchMoviesFromJSON(this.currentPage);
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.fetchMoviesFromJSON(this.currentPage);
    }
  }
  

}
