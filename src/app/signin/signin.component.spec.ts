import { TestBed } from "@angular/core/testing";
import { AuthGuard } from "../authGuard";
import { Router } from "@angular/router";

describe('Sign In ', () => {
  let authGuard: AuthGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
    });
    authGuard = TestBed.inject(AuthGuard);
    router = TestBed.inject(Router);

  });

  it('Sign In Successfully', () => {
    localStorage.setItem('isAuthenticated', 'true');
    const isAuthenticated = authGuard.canActivate();
    expect(isAuthenticated).toBeTrue();

  });




  it('Sign In Not Successfuly and Login Redirect', () => {
    localStorage.removeItem('isAuthenticated');

    const canActivateResult = authGuard.canActivate();

    expect(canActivateResult).toBeFalse();

    expect(router.navigate).toHaveBeenCalledWith(['/login']);

    expect(localStorage.getItem('isAuthenticated')).toBeNull();
  });
});
