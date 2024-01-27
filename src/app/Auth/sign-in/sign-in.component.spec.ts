import { TestBed, fakeAsync } from "@angular/core/testing";
import { AuthGuard } from "../authGuard";
import { Router } from "@angular/router";
import { NavbarComponent } from "../../core/components/navbar/navbar.component";

describe('SignIn ', () => {
  let authGuard: AuthGuard;
  let router: Router;
  let component: NavbarComponent;

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
    const fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
  });

  it('Sign In Successfully', () => {
    localStorage.setItem('isAuthenticated', 'true');
    const isAuthenticated = authGuard.canActivate();
    expect(isAuthenticated).toBeTrue();
  });

  it('Sign In Not Successfully and Login Redirect', () => {
    localStorage.setItem('isAuthenticated', 'false');
    const canActivateResult = authGuard.canActivate();
    expect(canActivateResult).toBeFalse();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });


});
