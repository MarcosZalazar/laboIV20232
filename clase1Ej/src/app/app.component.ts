import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'clase1Ej';
  lblSuma:string = 'Suma:';
  lblPromedio:string = 'Promedio:';
  lblCalcular:string = 'Calcular';
  lblLimpiar:string = 'Limpiar';
  edadUno:string = '';
  edadDos:string = '';
  suma:number = 0;
  promedio:number = 0;

  CalcularPromedioYSuma(){
    this.suma=Number(this.edadUno)+Number(this.edadDos);
    this.promedio=this.suma/2;
  }

  LimpiarResultados(){
    this.suma = 0;
    this.promedio = 0;
    this.edadUno = '';
    this.edadDos = '';
  }
}
