import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  listaClientes;
  constructor(private clienteService: ClienteService) {

     this.listaClientes = this.clienteService.getItems();

   }

  ngOnInit() {
  }

}