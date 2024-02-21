import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-registrar-empleados',
  templateUrl: './registrar-empleados.component.html',
  styleUrl: './registrar-empleados.component.css'
})
export class RegistrarEmpleadosComponent implements OnInit{

  empleado:Empleado = new Empleado();

  constructor(private empleadoServicio:EmpleadoService, private router:Router) {}

  ngOnInit(): void {
  }

  guardarEmpleado(){
    this.empleadoServicio.registrarEmpleado(this.empleado).subscribe(dato => {
      console.log(dato);
      this.irAlaListaDeEmpleados();
    }, error => console.log(error));
  }

  irAlaListaDeEmpleados(){
    this.router.navigate(['/empleados'])
  }

  onSubmit(){
    this.guardarEmpleado();
  }
}
