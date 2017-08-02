import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseService {

  private listings:  FirebaseListObservable<any[]>;
  
  private db:AngularFireDatabase;

  constructor(db:AngularFireDatabase) {
    this.db = db;
  }

  public getListings(){
   this.listings =this.db.list('/listings') as FirebaseListObservable<Listing[]>;
   return this.listings;
  }

}
export interface Listing{
  $key?:String,
  bedrooms?:Number,
  city?:String,
  Image?:String,
  owner?:String,
  path?:String,
  price?:Number,
  title?:String,
  type?:String,
}