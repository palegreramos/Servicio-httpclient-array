import { Component } from '@angular/core';
import {Todos} from './todos';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
public items=new Array<Todos>();
constructor (private servicioService: ServicioService) {}
ngOnInit() {
  this.servicioService.getData()
     .subscribe((item:Todos[]) => 
       this.items=item.map((i)=>{
         let user=new Todos(i.userId,i.id,i.title,i.completed);
         return user;
       }));
}
cambiaEstado(item:Todos) {
  item.cambia();
  console.log(item)
  console.log(item.mays)
 }
}
