// pais.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'https://localhost:7111/api/Pais';
  private paisesSubject = new BehaviorSubject<any[]>([]);
  paises$: Observable<any[]> = this.paisesSubject.asObservable();

  constructor(private http: HttpClient) {}

  createPais(nombre: string): Observable<any> {
    const url = `${this.apiUrl}/createPais`;
    const payload = { nombre };

    return this.http.get(url + '/?nombre='+nombre);
  }

  obtenerPaises() {
    this.http.get<any[]>(`${this.apiUrl}/obtenerPaisLista`).subscribe(
      (paises) => {
        this.paisesSubject.next(paises);
      },
      (error) => {
        console.error('Error al obtener la lista de países', error);
      }
    );
  }

  eliminarPais(id: string): Observable<any> {
    const url = `${this.apiUrl}/eliminarPais`;    
    return this.http.get(url +'/?id='+id);
  }
}
