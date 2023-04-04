import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BanerComponent } from './baner/baner.component';
import { SbanerComponent } from './sbaner/sbaner.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { PageventComponent } from './pagevent/pagevent.component';
import { ContactComponent } from './contact/contact.component';
import { SeemoreComponent } from './seemore/seemore.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BanerComponent,
    SbanerComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    EventsComponent,
    PageventComponent,
    ContactComponent,
    SeemoreComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
