import { Injectable } from '@angular/core';
import {Product} from '../model/product';
import { HttpClient } from '@angular/common/http';
import { environment }  from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerivcesService {

  url = 'http://localhost:8080/app-difusion/';

  constructor(private http: HttpClient) { }
  mostrarTodos(){

    return this.http.get
    (`${this.url}getall.php`);

  }
  eliminar(Id_Productos:any){
    return this.http.delete(`${this.url}delete.php/Id_Productos=${Id_Productos}`);
  }
  agregar(Producto:string){
    return this.http.post(`${this.url}post.php`, JSON.stringify(Producto));
  }

}
