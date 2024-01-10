// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { AppComponent } from './app.component';
import { PaisFormularioComponent } from './pais-formulario/pais-formulario.component';
import { PaisService } from './pais.service';
import { PaisListaComponent } from './pais-lista/pais-lista.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Asegúrate de importar el servicio

@NgModule({
  declarations: [
    AppComponent,
    PaisFormularioComponent,
    PaisListaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [
    PaisService  // Asegúrate de incluir el servicio aquí
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
