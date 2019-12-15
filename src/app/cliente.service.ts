import { Injectable } from '@angular/core';
import { KPICliente } from './kpicliente';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {
   
  listaClientes = [];
  kpiCliente = new KPICliente(1,2);
  constructor() { 

  //this.kpiCliente = new KPICliente();
  }

  addToCart(cliente) {
    this.listaClientes.push(cliente);
  }

  getItems() {
    return this.listaClientes;
  }

  clearCart() {
    this.listaClientes = [];
    return this.listaClientes;
  }

  indicadoresCliente(){
    
    // Promedio de edad
    let sum = 0;    
    const len = this.listaClientes.length;
    let total = 0;
    let suma  =0;
    let item  = null;
    
     for (let i = 0; i < len; i++) {
        item = this.listaClientes[i];
        if (!item.edad || 0 === item.edad.length) {
          item.edad = 0;
        }else{
          suma = suma + Number(item.edad);
          total = total + 1;
        }
    }
    this.kpiCliente.promedioEdad = suma / total; 
    //Desviación estandar
    var DesvEst = 0;
    for(var cli in this.listaClientes)      
       DesvEst += Math.pow((parseFloat(this.listaClientes[cli].edad) - this.kpiCliente.promedioEdad),2);
    var DSresult = Math.sqrt(DesvEst/this.listaClientes.length); 
    this.kpiCliente.desvEstandar = DSresult;
    console.warn('Indicadores clientes>>>>', suma + '   ' +total + '    ' + DSresult );
    return this.kpiCliente;
  }

  
}