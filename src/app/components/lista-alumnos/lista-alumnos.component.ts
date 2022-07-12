import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../classes/Alumno';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})


export class ListaAlumnosComponent implements OnInit {

  listaAlumnos: Alumno[] = [
  new Alumno("Lautaro", "Ramadán", 23, "Programación", new Date('2022-2-16 16:47'), "promoción"),
  new Alumno("Jane", "Hopper", 20, "Laboratorio", new Date('2022-2-22 22:22'), "promoción"),
  new Alumno("Max", "Mayfield", 19, "Algoritmia", new Date('2022-3-31 23:59'), "recursa"),
  new Alumno("Mike", "Wheeler", 18, "Metodología de sistemas", new Date('2022-1-1 00:00'), "regular"),
  new Alumno("Dustin", "Henderson", 18, "BBDD", new Date('2022-2-10 10:30'), "promoción"),
  new Alumno("Steve", "Harrington", 23, "Cine", new Date('2022-4-9 16:30'), "regular"),
  new Alumno("Eddie", "Munson", 25, "Música", new Date('2021-12-12 12:12'), "recursa"),
  new Alumno("Nancy", "Wheeler", 22, "Periodismo", new Date('2022-1-1 21:10'), "promoción"),
  new Alumno("Robin", "Buckley", 22, "Cine", new Date('2022-2-9 16:10'), "regular"),
  new Alumno("Lucas", "Sinclair", 18, "Gimnasia", new Date('2022-2-28 15:23'), "regular"),
  new Alumno("Will", "Byers", 18, "Metodología de sistemas", new Date('2022-1-2 09:00'), "recursa"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
