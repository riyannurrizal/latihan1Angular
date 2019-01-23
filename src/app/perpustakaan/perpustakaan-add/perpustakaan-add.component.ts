import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Buku } from '../perpustakaan.model'
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-perpustakaan-add',
  templateUrl: './perpustakaan-add.component.html',
  styleUrls: ['./perpustakaan-add.component.css']
})
export class PerpustakaanAddComponent implements OnInit {
  @ViewChild('inputeIsbn') inputIsbn: ElementRef;
  @ViewChild('inputNamaBuku') inputNamaBuku: ElementRef;
  @ViewChild('inputQty') inputQty: ElementRef;

  //@Output() perpusAdded = new EventEmitter<Buku>();

  constructor() { }
  inputInfo: Buku = new Buku();
  ngOnInit() {
  }

  tambahPerpus(inputBuku: HTMLInputElement) {
    console.log(this.inputInfo);
    this.inputInfo = new Buku();
  }

}
