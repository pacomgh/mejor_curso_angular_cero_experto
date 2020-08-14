import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//para trabajar con two way binding
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//registramos cada modulo nuevo creado, combina property y event binding
import { PersonasComponent } from './personas/personas.component';
import { PersonaComponent } from './persona/persona.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
