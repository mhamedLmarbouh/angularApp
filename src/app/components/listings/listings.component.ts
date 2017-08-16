import { FirebaseListObservable } from 'angularfire2/database';
import { Component, OnInit , Output , EventEmitter } from '@angular/core';
import { FirebaseService , Listing } from '../../services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  private listings: FirebaseListObservable<any[]>;
  private firebaseService: FirebaseService;


  constructor(firebaseService: FirebaseService) {
    this.firebaseService = firebaseService;
     this.listings = this.firebaseService.getListings();
  }



  ngOnInit() {

  }

  public setList(list: Listing) {
    this.firebaseService.setList(list);
  }
  

	public get $listings(): any {
		return this.listings;
  }

	public set $listings(value: any) {
		this.listings = value;
	}
  
}
