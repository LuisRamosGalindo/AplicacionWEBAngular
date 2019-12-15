import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-crea',
  templateUrl: './cliente-crea.component.html',
  styleUrls: ['./cliente-crea.component.css']
})
export class ClienteCreaComponent implements OnInit {
  checkoutForm;
  constructor( private formBuilder: FormBuilder, private clienteService: ClienteService) {

      this.checkoutForm = this.formBuilder.group({
      nombres: '',
      apellidos: '',
      edad: '',
      fecNacimiento: '',
      fecMuerte:'',
    });

   }

    onSubmit(cliente) {
    // Process checkout data here
    console.warn('Se ha registrado el cliente', cliente);
    var fecMuerte = '';     
    var fecNacimiento = cliente.fecNacimiento;    
    var anhoNac =''; 
    var anhoMuerte='';

    if(fecNacimiento == null ||  fecNacimiento == undefined || fecNacimiento.length == 0){
        fecMuerte='0000-00-00';
    }else{
        anhoNac = fecNacimiento.substring(0,4);
        anhoMuerte = (Number(anhoNac) + 80).toString(); 
        cliente.fecMuerte = cliente.fecNacimiento.replace(anhoNac, anhoMuerte); 
    }
    console.warn('Se ha registrado el cliente111111', cliente);

    this.clienteService.addToCart(cliente);
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}