import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs'
import { FormGroup, FormControl } from '@angular/forms';
import {SerivcesService} from '../services/serivces.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  productos=null;
  productForm = new FormGroup({
    Producto: new FormControl(''),
    Monto: new FormControl(''),
    Descripción: new FormControl('')
  });
  constructor(private SVC:SerivcesService) {
   }

   ngOnInit(): void {
    this.MostrarTodos();
  }
  MostrarTodos() {
    this.SVC.mostrarTodos().subscribe(
      (result: any)=>
    this.productos = result);
    console.log(this.productos)
  }

  Eliminar(Id_Productos:any):void{
    console.log(Id_Productos)
    if(window.confirm("¿Estas seguro de querer eliminar?")){
      this.SVC.eliminar(Id_Productos).subscribe(() => {
        this.MostrarTodos();
      },(error) => {
        console.error(error);
    })
   }
  }

  Agregar(): void {
    this.SVC.agregar(this.productForm.value).subscribe(() => {
      this.MostrarTodos();
      this.productForm.reset('');
    })
  }
}
