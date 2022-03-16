import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//interface
import { prodIdx } from '../interfaces/prod_idx';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loading = true;
  productos: prodIdx[] = [];
  productosFiltro: prodIdx[] = [];

  constructor(private http: HttpClient) { 
    this.getProductosIdx();
  }

  getProductosIdx(){
    return this.http.get<prodIdx>('https://angular-html-c19dc-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json');
  }

  getProductos(id: string){
    return this.http.get<prodIdx>(`https://angular-html-c19dc-default-rtdb.europe-west1.firebasedatabase.app/productos/${ id }.json`);
  }
  
}
