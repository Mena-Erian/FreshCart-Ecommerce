import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  router = inject(Router);
  userData: any = null;
  private defaultEmail: string = '';
  setDefaultEmail(userEmail?: string): string {
    if (userEmail) {
      this.defaultEmail = userEmail;
    }
    console.log(this.defaultEmail);
    return this.defaultEmail;
  }
  signIn(formData: object): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.BaseUrl}/api/v1/auth/signup`,
      formData
    );
  }
  logIn(formData: object): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.BaseUrl}/api/v1/auth/signin`,
      formData
    );
  }
  saveUserData(): void {
    if (localStorage.getItem('token')) {
      this.userData = jwtDecode(localStorage.getItem('token')!);
    }
    console.log(this.userData);
  }
  logout() {
    localStorage.removeItem('token');
    this.userData = null;
    this.router.navigate(['/login']);
  }
  setEmailVerfiy(data: object): Observable<any> {
    return this.httpClient.post(
      `${environment.BaseUrl}/api/v1/auth/forgotPasswords`,
      data
    );
  }
  setCodeVerfiy(data: object): Observable<any> {
    return this.httpClient.post(
      `${environment.BaseUrl}/api/v1/auth/verifyResetCode`,
      data
    );
  }
  setResetPassword(data: object): Observable<any> {
    return this.httpClient.put(
      `${environment.BaseUrl}/api/v1/auth/resetPassword`,
      data
    );
  }
}
