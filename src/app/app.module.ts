import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ClienteCreaComponent } from './cliente-crea/cliente-crea.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { ClienteKpiComponent } from './cliente-kpi/cliente-kpi.component';
import { ClienteService } from './cliente.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ClienteCreaComponent },
      { path: 'listaProductos', component: ProductListComponent },
      { path: 'listaClientes', component: ClienteListaComponent },
      { path: 'kpiClientes', component: ClienteKpiComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ClienteCreaComponent,
    ClienteListaComponent,
    ClienteKpiComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ClienteService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/