import { Component, OnInit } from '@angular/core';
import { Buku } from './perpustakaan.model';


@Component({
  selector: 'app-perpustakaan',
  templateUrl: './perpustakaan.component.html',
  styleUrls: ['./perpustakaan.component.css']
})
export class PerpustakaanComponent implements OnInit {
  perpusList: Buku[] = [];

  constructor() { }

  ngOnInit() {
  }

  onPerpusAdded(perpusInfo: Buku) {
    this.perpusList.push(perpusInfo);
    console.log(this.perpusList);
  }




}
