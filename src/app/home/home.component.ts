import { Component, OnInit } from '@angular/core';
import { Ciudad } from '../shared/ciudad/ciudad';
import { Partido } from '../shared/ciudad/partido';
import { CiudadService } from '../shared/ciudad/ciudad.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ciudades: Ciudad[];
  ciudadSeleccionada: Ciudad;
  partidos: Ciudad[];
  mensajeError: string;

  constructor(private ciudadService: CiudadService) { }

  getCuidades(): void { 
    this.ciudadService.getCiudades().subscribe(
          ciudades => this.ciudades = ciudades,
          error =>  this.mensajeError = <any>error);
  }

  getPartidosXCiudad(ciudad : Ciudad): void { 
    //if (!ciudad) { return; }
    this.ciudadService.getPartidosXCiudad(ciudad).subscribe(
          partidos => this.partidos = partidos,
          error =>  this.mensajeError = <any>error);
  }

  ngOnInit() {
     this.getCuidades();
  }

  onSelect(ciudad: Ciudad): void {
    this.ciudadSeleccionada = ciudad;
    this.getPartidosXCiudad(ciudad);
  }

}
