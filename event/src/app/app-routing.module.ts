import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { EventsComponent } from './events/events.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'event',component:EventsComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
