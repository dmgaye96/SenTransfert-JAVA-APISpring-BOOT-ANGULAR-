import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {


  constructor(private authService: AuthService,  private router: Router) { }
    canActivate(): boolean {
      if (this.authService.loggedIn()) {
        console.log('true')
        return true
      } else {
        console.log('false')
        this.router.navigate(['/auth/signin'])
        return false
      }
    }

}
