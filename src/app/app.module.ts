import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { FilterPipe } from './pipes/filter.pipe';
import { AppComponent } from './app.component';
import { DropdownComponent } from './components/dropdown.component';



@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
