import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  /*se crea y se da valores a dos elementos dentro del arreglo persona de tipo Persona*/
  personas: Persona[] = [new Persona('Juan', 'Perez'), new Persona('Laura', 'Juarez')];
  nombreInput: string;
  apellidoInput: string;

  onAgregarPersona() {
    let persona1 = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona1);
  }
}
