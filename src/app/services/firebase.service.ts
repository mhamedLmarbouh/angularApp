import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class FirebaseService {

  private listings:  FirebaseListObservable<any[]>;

  private db: AngularFireDatabase;
  private afAuth: AngularFireAuth;
  private user: Observable<firebase.User>;
  private router: Router;
  private list: Listing;

  constructor(db: AngularFireDatabase, afAuth: AngularFireAuth, router: Router) {
    this.db = db;
    this.afAuth = afAuth;
    this.user = afAuth.authState;
    this.router = router;
  }

   getListings() {
   this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
   return this.listings;
  }

  deleteList() {
    this.listings.remove(this.list.$key.toString())
    .then(_ => this.router.navigate['/listings']);
  }

  getUser() {
    return this.user;
  }

  isUserConnected() {
    if ( this.afAuth.auth.currentUser == null ) {
      return false;
    }else {
      return true;
    }
  }

  public setList(list: Listing) {
    this.list = list;
  }

   public getList(): Listing {
    return this.list;
  }

  login() {
   return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.router.navigate(['']);
    return this.afAuth.auth.signOut();
  }

}


export interface Listing {
  $key?: String;
  bedrooms?: Number;
  city?: String;
  Image?: String;
  owner?: String;
  path?: String;
  price?: Number;
  title?: String;
  type?: String;
}
