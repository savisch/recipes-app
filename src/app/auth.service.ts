import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;

  constructor(private router: Router) {}

  async isAuthenticated(): Promise<boolean> {
    return await new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 500);
    });
  }

  login(): void {
    this.loggedIn = true;
    this.router.navigate(['/recipes']);
  }

  logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/']);
  }
}
