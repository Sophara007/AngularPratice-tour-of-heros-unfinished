import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
     // Declare the component here
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesComponent,
    HeroDetailComponent,
    FormsModule,
  ],
  providers: [],
  exports: [
    HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
