import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([])],
      declarations: [FilterComponent],
    }).compileComponents();

    router = TestBed.inject(Router);
    const fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should log out and redirect to login page', fakeAsync(() => {
    spyOn(router, 'navigate').and.stub(); 
    component.logout(); 
    expect(localStorage.getItem('isAuthenticated')).toBe('false'); 
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  }));
});
