import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { prodIdx } from 'src/app/interfaces/prod_idx';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productos: prodIdx[] = [];
  productos_encontrados: prodIdx[] = [];
  textoBusq: any ='';

  loading = true;

  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit(): void {

    this.textoBusq = this.route.snapshot.paramMap.get('textobusq');

    this.textoBusq = this.textoBusq.toLowerCase();
    
    this.productosService.getProductosIdx()
      .subscribe((resp: any) =>{        
        this.productos = resp;   
        
        this.productos.forEach((prod: any) =>{

          let categoria = prod.categoria.toLowerCase();
          
          if (categoria.indexOf(this.textoBusq) >= 0) {
            
            this.productos_encontrados.push(prod);
            console.log(this.productos_encontrados);
          }

        });
        setTimeout(() => {
          this.loading = false;
        }, 2000);
      });


  }

}
