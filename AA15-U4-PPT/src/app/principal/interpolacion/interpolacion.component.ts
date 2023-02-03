import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {

  Titulo: string = "Data Binding Interpolation";

  show = true;
  
  toggle() {
    this.show = !this.show;
  }

  TwodayTitulo: string = "Two Way Binding";

  textarea: string = "El two-way binding en Angular nos permite modificar el valor de una propiedad de forma bidireccional, de forma que cuando nostros modificamos el valor de una propiedad en la vista el valor tambien se actualiza en el modelo de datos.";

}
