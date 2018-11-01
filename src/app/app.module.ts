import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { MainComponent } from './components/main/main.component';
import { ActivityFilterPipe } from './components/main/activity-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    SocialCardComponent,
    MainComponent,
    ActivityFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
