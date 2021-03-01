import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Injectable } from '@angular/core';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;

  constructor(private router: Router, private angularfirebase : AngularFireAuth) {}

  signupUser(email: string, password: string) {
    this.angularfirebase.createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  async signinUser(email: string, password: string) {
    this.angularfirebase.signInWithEmailAndPassword(email, password)
      .then(
        async response => {
         
          (await this.angularfirebase.currentUser).getIdToken()
            .then(
              (token: string) => this.token = token
            )
            this.router.navigate(['/userslist']);
            console.log(this.token)
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    this.angularfirebase.signOut();
    this.token = null;
  }

  async getToken() {
    (await this.angularfirebase.currentUser).getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;

  }

  isAuthenticated() {
    return this.token != null;
  }
}
