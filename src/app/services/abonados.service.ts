import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Abonado {
  id: string;
  userId: string;
  nombre: string;
  dni: string;
  fechaNacimiento: string;
  tipo: string;
  direccion: string;
  fotoUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AbonadosService {
  private baseUrl = 'http://localhost:8082/api/abonados';

  constructor(private http: HttpClient) {}

  getAbonados(): Observable<Abonado[]> {
    return this.http.get<Abonado[]>(this.baseUrl);
  }

  crearAbonado(abonado: Abonado) {
  return this.http.post<Abonado>('http://localhost:8082/api/abonados', abonado);
}

eliminarAbonado(id: string) {
  return this.http.delete(`http://localhost:8082/api/abonados/${id}`);
}

actualizarAbonado(id: string, abonado: Abonado) {
  return this.http.put(`http://localhost:8082/api/abonados/${id}`, abonado);
}


}
