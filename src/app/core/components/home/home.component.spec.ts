import { TestBed, inject } from '@angular/core/testing';
import { TMDBService } from '../../services/tmdb.service';
import { HttpClientModule } from '@angular/common/http';

describe('HomeComponent', () => {
  let service: TMDBService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(TMDBService);
  });



  it('should retrieve movies from TMDB API in the default page', (done:DoneFn) => {

    service.getMovies().subscribe((movies) => {
     expect(movies).toBeTruthy();
     expect(movies.results).toBeDefined();
     expect(movies.results[0].id).toBeDefined();
     expect(movies.results[0].poster_path).toBeDefined();
     expect(movies.results[0].original_title).toBeDefined();
     expect(movies.results[0].vote_average).toBeDefined();
     done();
    });
  });


  it('should retrieve movies from TMDB API in the number page', (done:DoneFn) => {

    service.getMovies(3).subscribe((movies) => {
     expect(movies).toBeTruthy();
     expect(movies.results).toBeDefined();
     expect(movies.results[0].id).toBeDefined();
     expect(movies.results[0].poster_path).toBeDefined();
     expect(movies.results[0].original_title).toBeDefined();
     expect(movies.results[0].vote_average).toBeDefined();
     done();
    });
  });
});
