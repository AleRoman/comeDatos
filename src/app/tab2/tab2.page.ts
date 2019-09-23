import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tramite } from '../models/tramite_model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  url = 'https://cors-anywhere.herokuapp.com/tramites.gestionpublica.qroo.gob.mx/sistema/wstramites.php';
  tramites: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      console.log(res);
      this.tramites = res;
      console.log(this.tramites);
    });
  }

}
