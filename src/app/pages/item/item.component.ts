import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: any = {};

  id: any = '';

  constructor(private route: ActivatedRoute,
              public productosService: ProductosService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');

    this.productosService.getProductos(this.id)
    .subscribe((resp: any) => {
      this.producto = resp;
    });

    /*
    this.route.params
      .subscribe( param => { 
          console.log(param['id']);
          
          this.productosService.getProductos(param['id'])
            .subscribe((resp: Producto) => {
              console.log(resp);
              this.producto = resp;
            });



      });
    */

  }

}
