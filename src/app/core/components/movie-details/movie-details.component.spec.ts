import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TMDBService } from '../../services/tmdb.service';
import { environment } from '../../../../environments/environment';
import { HttpClientModule } from '@angular/common/http';

describe('movieDetailsComponent - Mocked', () => {
  let service: TMDBService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule , HttpClientModule],
    });
    service = TestBed.inject(TMDBService);
    httpMock = TestBed.inject(HttpTestingController);
  });



  it('should retrieve a MockData', () => {
    const movieId = '243'; 
    const expectedUrl = `${environment.apiUrl}/${movieId}?api_key=${environment.key}`;
  
    const mockMovieData = {
      "adult": true,
      "backdrop_path": "/1pjOrzAqlQPifZkRi5h1zlO1VJ2.jpg",
      "belongs_to_collection": null,
      "budget": 30000000,
      "genres": [
        { "id": 18, "name": "Drama" },
        { "id": 35, "name": "Comedy" },
        { "id": 10749, "name": "Romance" },
        { "id": 10402, "name": "Music" }
      ],
      "homepage": "",
      "id": 243,
      "imdb_id": "tt0146882",
      "original_language": "en",
      "original_title": "High Fidelity",
      "overview": "When record store owner and compulsive list-compiler Rob Gordon gets dumped by his long-time girlfriend...",
      "popularity": 14.59,
      "poster_path": "/e2LZGB62GMhv3Fo8tDZjY87I81a.jpg",
      "production_companies": [
        {
          "id": 9195,
          "logo_path": "/ou5BUbtulr6tIt699q6xJiEQTR9.png",
          "name": "Touchstone Pictures",
          "origin_country": "US"
        },
      ],
      "production_countries": [
        { "iso_3166_1": "GB", "name": "United Kingdom" },
        { "iso_3166_1": "US", "name": "United States of America" }
      ],
      "release_date": "2000-03-17",
      "revenue": 47100000,
      "runtime": 113,
      "spoken_languages": [
        { "english_name": "Danish", "iso_639_1": "da", "name": "Dansk" },
        { "english_name": "English", "iso_639_1": "en", "name": "English" }
      ],
      "status": "Released",
      "tagline": "What came first - the music or the misery?",
      "title": "High Fidelity",
      "video": false,
      "vote_average": 7.142,
      "vote_count": 1830
    };
  
    service.getById(movieId).subscribe((movie : any) => {

      expect(movie).toEqual(mockMovieData);
      
    });
  
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
  
    req.flush(mockMovieData); 
    httpMock.verify(); 

  });

  
});

describe('movieDetailsComponent - Fetched Data' , () => {
  let service: TMDBService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(TMDBService);
  });
  it('should retrieve data from specific Id from TMDB APIS', (done:DoneFn) => {
    service.getById('243').subscribe((movie) => {
     expect(movie).toBeTruthy();
     expect(movie.poster_path).toBeDefined();
     expect(movie.genres).toBeDefined();
     expect(movie.original_title).toBeDefined();
     expect(movie.release_date).toBeDefined();
     expect(movie.overview).toBeDefined();
     expect(movie.popularity).toBeDefined();
     expect(movie.budget).toBeDefined();
     expect(movie.revenue).toBeDefined();
     expect(movie.runtime).toBeDefined();
     expect(movie.vote_average).toBeDefined();
     done()
    });
  });
});
