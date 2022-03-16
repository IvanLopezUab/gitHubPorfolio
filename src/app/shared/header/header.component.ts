import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public infoPagServ: InfoPaginaService,
               private router: Router) { }

  ngOnInit(): void {
  }

  buscarTexto(texto: string){
    if (texto.length > 2) {
      this.router.navigate(['search', texto]);
    } else {
      alert('La cantidad minima de caracteres para realizar la busqueda es de tres caracteres');
    }
    
  }

  cleanBusqueda(){
    this.router.navigate(['home']);
  }

}
