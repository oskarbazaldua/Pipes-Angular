import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.scss']
})
export class BasicsPageComponent {

  public nameLower: string = 'oskar bazaldúa';
  public nameUpper: string = 'OSKAR BAZALDÚA';
  public fullName: string = 'OsKaR BaZaLdÚa';

  public customDate: Date = new Date();
}
