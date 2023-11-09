import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RobotsComponent } from './robots/robots.component';
import { PublicationsComponent } from './publications/publications.component';
import { ReposComponent } from './repos/repos.component';
import { MembersComponent } from './members/members.component';
import { PreviousComponent } from './previous/previous.component';
import { LinksComponent } from './links/links.component';
import { RobotsPopUpComponent } from './robots/robots-pop-up/robots-pop-up.component';
import { LinksPopUpComponent } from './links/links-pop-up/links-pop-up.component';
import { PublicationsPopUpComponent } from './publications/publications-pop-up/publications-pop-up.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RobotsComponent,
    PublicationsComponent,
    ReposComponent,
    MembersComponent,
    PreviousComponent,
    LinksComponent,
    RobotsPopUpComponent,
    LinksPopUpComponent,
    PublicationsPopUpComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
