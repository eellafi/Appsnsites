import { Component } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.items = firestore.collection('items').valueChanges();
  }
  ngOninit(){
    let firebaseConfig = {
      apiKey: "AIzaSyCh7ax8vDIGj2Uq6chLG09mZtRwYTeV2Uk",
      authDomain: "appsnsite.firebaseapp.com",
      projectId: "appsnsite",
      storageBucket: "appsnsite.appspot.com",
      messagingSenderId: "770105670445",
      appId: "1:770105670445:web:c78b3705dc167d84c931a4",
      measurementId: "G-CJ5E74DMB7"
    };
    AngularFireModule.initializeApp(firebaseConfig);
  }
  title = 'Appsnsites';
}
