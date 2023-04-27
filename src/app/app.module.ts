import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración de hora local de la app
import LocaleEsMX from '@angular/common/locales/es-MX';
import LocaleEsFR from '@angular/common/locales/fr-CA';

import { registerLocaleData } from "@angular/common";

registerLocaleData( LocaleEsMX );
registerLocaleData( LocaleEsFR );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
