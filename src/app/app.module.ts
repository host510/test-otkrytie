import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NoBehaviourButtonComponent } from './components/no-behaviour-button/no-behaviour-button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ComboboxComponent } from './components/combobox/combobox.component';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { GridComponent } from './components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NoBehaviourButtonComponent,
    CheckboxComponent,
    ComboboxComponent,
    TextfieldComponent,
    GridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
