import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppReducer } from './state/app.reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './state/app.effects';
import { AppActions } from './state/app.actions';
import { Actions } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Actions,
    StoreModule.forRoot({ app: AppReducer }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
