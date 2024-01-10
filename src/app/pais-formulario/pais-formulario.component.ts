// pais-formulario.component.ts
import { Component } from '@angular/core';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-formulario',
  templateUrl: './pais-formulario.component.html',
  styleUrls: ['./pais-formulario.component.css']
})
export class PaisFormularioComponent {
  nombre: string = '';

  constructor(private paisService: PaisService) {}

  submitForm() {
    this.paisService.createPais(this.nombre).subscribe(
      (response) => {
        console.log('Éxito:', response);
        this.paisService.obtenerPaises();
        // Puedes manejar la respuesta aquí (por ejemplo, mostrar un mensaje de éxito)
      },
      (error) => {
        console.error('Error:', error);
        // Puedes manejar errores aquí (por ejemplo, mostrar un mensaje de error)
      }
    );


  }
}
