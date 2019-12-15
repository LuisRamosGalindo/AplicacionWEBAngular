import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-kpi',
  templateUrl: './cliente-kpi.component.html',
  styleUrls: ['./cliente-kpi.component.css']
})
export class ClienteKpiComponent implements OnInit {

  kpiClientes;

  constructor(private clienteService: ClienteService) { 

         this.kpiClientes = this.clienteService.indicadoresCliente();
  }

  ngOnInit() {
  }

}