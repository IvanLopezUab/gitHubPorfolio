import { Component, OnInit } from '@angular/core';
import { prodIdx } from 'src/app/interfaces/prod_idx';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productos: prodIdx[] = [];

  loading = true;

  constructor(public productosService: ProductosService) { 

  }

  ngOnInit(): void {

    this.productosService.getProductosIdx()
      .subscribe((resp: any) =>{
        this.productos = resp;       

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      })

  }

}
