import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

// environment varibles
import { environment } from '../environments/environment';

// component
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { ListingComponent } from './components/listing/listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditeListingComponent } from './components/edite-listing/edite-listing.component';

// services
import { FirebaseService } from './services/firebase.service';
import { AuthGardService } from './services/security/auth-gard.service';

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent , canActivate : [AuthGardService]},
  {path: 'listing/:id', component: ListingComponent , canActivate : [AuthGardService]}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    ListingComponent,
    NavbarComponent,
    AddListingComponent,
    EditeListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRouts),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FlashMessagesModule
  ],
  providers: [
    FirebaseService,
    AuthGardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
