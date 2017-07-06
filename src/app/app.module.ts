import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {HeaderComponent} from './header.component';
import { SpotifyComponent } from './spotify/spotify.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderComponent,
    SpotifyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
