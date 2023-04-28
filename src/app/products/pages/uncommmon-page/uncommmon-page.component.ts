import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommmon-page',
  templateUrl: './uncommmon-page.component.html',
  styleUrls: ['./uncommmon-page.component.scss']
})
export class UncommmonPageComponent {

  //i18n Select
  public name: string = 'Oskar';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female':'invitarla'
  }

  changeClient ():void {
    this.name = "Melisa";
    this.gender = "female";
  }

  //i18n Plural y i18nSlice
  public clients: string[] = ['María','Pedro','Fernando','Eduardo','Melisa','Natalia'];
  public clientsMap = {
    '=0': 'no tenemos clientes esperando',
    '=1': 'tenemos # cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deletClient():void {
    this.clients.shift();
  }

  //KeyValue Pipe
  //objeto
  public person = {
    name: 'Fernando',
    age: 36,
    address: 'Otawa, Canada'
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(1000).pipe(
      tap( value => console.log('tap:', value))
    );

  public promiseValue: Promise<string> = new Promise( (resolve, reject ) => {
    setTimeout(() => {
      resolve ('Tenemos data en la promesa.');
      this.person.name = 'Otro nombre'
    }, 3500);
  })

}
