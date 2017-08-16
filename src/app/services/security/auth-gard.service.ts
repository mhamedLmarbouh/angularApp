import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FirebaseService } from '../firebase.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthGardService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     if (this.firebaseService.isUserConnected()) {
        return true;
     }else {
        this.router.navigate(['']);
        this.flashMesagesService.show('please login first', { cssClass: 'alert-info' , timeout: 3000 });
        return false;
     }
  }

  constructor(private firebaseService: FirebaseService , private router: Router, private flashMesagesService: FlashMessagesService) { 
    console.log('Auth gard ...');
  }

}
