import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { ServicioService } from './servicio.service';
import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent ],
  providers: [ ServicioService ], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
