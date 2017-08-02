import { Component, OnInit } from '@angular/core';
import { FirebaseService, Listing } from '../../services/firebase.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  private listings:any;
  private firebaseService:FirebaseService;

  constructor(firebaseService:FirebaseService) { 
    this.firebaseService=firebaseService;
  }

  ngOnInit() {
    this.firebaseService.getListings()
    .subscribe(listings => {
      console.log(listings[0].bedrooms);
      this.listings=listings;
      
    });
     
  }

}  
