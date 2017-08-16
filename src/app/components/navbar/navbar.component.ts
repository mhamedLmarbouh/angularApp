import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';

// services
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private firebaseService: FirebaseService;
  private flashMesagesService: FlashMessagesService;

  private user;


  constructor(firebaseService: FirebaseService, flashMesagesService: FlashMessagesService) {
    this.firebaseService = firebaseService;
    this.flashMesagesService = flashMesagesService;
  }

  ngOnInit() {
  }


  public login() {
    this.firebaseService.login()
    .then(_ => this.flashMesagesService.show('Logged in!', { cssClass: 'alert-info' , timeout: 3000 }));
  }

  public logout() {
    this.firebaseService.logout()
    .then(_ => this.flashMesagesService.show('Logged out!', { cssClass: 'alert-info' , timeout : 3000}));
  }

  getUser() {
    return this.firebaseService.getUser();
  }

}
