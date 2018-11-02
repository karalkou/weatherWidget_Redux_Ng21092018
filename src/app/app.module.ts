import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';
import { SocialCardComponent } from './social-card/social-card.component';
import { MainComponent } from './main/main.component';
import { ActivityFilterPipe } from './main/activity-filter.pipe';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers } from './store';
import { environment } from '../environments/environment';
import { BASE_URL, BASE_URL_TOKEN } from './config';
import { ItemsEffects } from './store/effects/items.effect';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    SocialCardComponent,
    MainComponent,
    ActivityFilterPipe,
    MenuComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([ItemsEffects]),
    StoreModule.forRoot(reducers),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
    {
      provide: BASE_URL_TOKEN,
      useValue: BASE_URL,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
