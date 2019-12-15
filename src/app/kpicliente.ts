export class KPICliente {
  public promedioEdad : number=0.00; 
  public desvEstandar : number=0.00;

     constructor (promedioEdad: number, desvEstandar: number) {
        this.promedioEdad = promedioEdad;
        this.desvEstandar = desvEstandar;
    }
}