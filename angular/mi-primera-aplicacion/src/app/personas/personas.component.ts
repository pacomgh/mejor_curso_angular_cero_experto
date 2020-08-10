import { Component } from '@angular/core';

//para que se conveirta en una clase de angular se agrega un decorador,
//el decorador agrega caracteristicas a la clase para que se considera componente
@Component({
  //nombe del componente
  selector: 'app-personas',
  //plantilla html
  templateUrl: './personas.component.html'
})
//se agrega export para exportar la clase y se pueda usar en otro paquete
export class PersonasComponent{

}
