import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { SocialComponent } from './components/social/social.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', redirectTo: '' },
  { path: 'about-us', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'testimonials', component: SocialComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
