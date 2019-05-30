import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { SocialComponent } from './components/social/social.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
    declarations: [
        AppComponent,
        LandingPageComponent,
        AboutComponent,
        ServicesComponent,
        TeamComponent,
        SocialComponent,
        ContactComponent
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        CarouselModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
