// pais-lista.component.ts
import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';

@Component({
  selector: 'app-pais-lista',
  templateUrl: './pais-lista.component.html',
  styleUrls: ['./pais-lista.component.css']
})
export class PaisListaComponent implements OnInit {
  paises: any[] = [];

  constructor(private paisService: PaisService) {}

  ngOnInit() {
    this.paisService.paises$.subscribe((paises) => {
      this.paises = paises;
    });

    // Inicializar la lista de países al cargar el componente
    this.paisService.obtenerPaises();
  }

  eliminarPais(id: string): void {
    // Llama al servicio para eliminar el país
    this.paisService.eliminarPais(id).subscribe(
      () => {
        console.log(`País eliminado con ID: ${id}`);
        this.paisService.obtenerPaises();
        // No es necesario llamar a obtenerPaises aquí, ya que el observable
        // paises$ debería haberse actualizado automáticamente al eliminar un país
      },
      (error) => {
        console.error('Error al eliminar el país', error);
      }
    );
  }
}
