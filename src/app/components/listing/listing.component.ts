import { Component, OnInit } from '@angular/core';
import { FirebaseService , Listing } from '../../services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  private list: Listing;
  private firebaseService: FirebaseService;
  private route: ActivatedRoute;


  constructor(firebaseService: FirebaseService, route: ActivatedRoute) {
    this.firebaseService = firebaseService;
    this.route = route;
  }

  ngOnInit() {
    this.setList();
  }

  private setList() {
    this.list = this.firebaseService.getList();
  }

  public deleteList() {
    this.firebaseService.deleteList();
  }



}
