import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirtsComponent } from './components/firts/firts.component';
import { CursosModule } from './components/cursos/cursos.module';

@NgModule({
  declarations: [AppComponent, FirtsComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CursosModule],
})
export class AppModule {}
