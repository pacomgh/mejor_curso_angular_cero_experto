import { Component } from '@angular/core';

//para que se conveirta en una clase de angular se agrega un decorador,
//el decorador agrega caracteristicas a la clase para que se considera componente
@Component({
  //nombe del componente
  selector: 'app-personas',
  //plantilla html
  templateUrl: './personas.component.html',
  //agrega hoja de estilos
  styleUrls: ['./personas.component.css']
})
//se agrega export para exportar la clase y se pueda usar en otro paquete
export class PersonasComponent{
  agregarPersona = false;
  agregarPersonaStatus = "No se ha agregado ninguna persona";
  tituloPersona = "Ingeniero";

  constructor(){
    setTimeout(() => {
      this.agregarPersona = true;
    }, 3000);
  }

  //se usa on cuando mandamos llamr a un metodo dentro del componenete typescript
  onCrearPersona(){
    this.agregarPersonaStatus = "Persona agregada";
  }

  onModificarPersona(event: Event){
    //hacemos un casting a un htmlinputelement ya que no contiene un elemento value
    //el evento debe ser casteado
    //value accede a cada valor introducido en la caja de texto
    this.tituloPersona = (<HTMLInputElement>event.target).value;
  }
}
