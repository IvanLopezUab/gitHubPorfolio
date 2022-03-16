import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info.pag';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient) { 
    //explicacion json 
    /*   
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) =>{
        console.log(resp);
        this.info = resp;
        this.cargada = true;
      });
    */
    // explicacion firebase
    this.cargarInfo();
    this.cargarEquipo();

   }


   // explicacion firebase
   private cargarInfo(){

    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) =>{
        this.info = resp;
        this.cargada = true;
      });

   }

   private cargarEquipo(){

    this.http.get('https://angular-html-c19dc-default-rtdb.europe-west1.firebasedatabase.app/equipo.json')
      .subscribe((resp: any) =>{
        this.equipo = resp;
      });

 }

}
