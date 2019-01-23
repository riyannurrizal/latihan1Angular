import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PerpustakaanComponent } from './perpustakaan/perpustakaan.component';
import { PerpustakaanAddComponent } from './perpustakaan/perpustakaan-add/perpustakaan-add.component';
import { PerpustakaanListComponent } from './perpustakaan/perpustakaan-list/perpustakaan-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PerpustakaanComponent,
    PerpustakaanAddComponent,
    PerpustakaanListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
