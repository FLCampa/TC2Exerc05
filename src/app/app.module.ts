import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PlacaAutomovelAntigaPipe } from './pipes/placa-automovel-antiga.pipe';
import { PlacaAutomovelAntigaComponent } from './placa-automovel-antiga/placa-automovel-antiga.component';
import { PlacaAutomovelMercosulPipe } from './pipes/placa-automovel-mercosul.pipe';
import { PlacaAutomovelMercosulComponent } from './placa-automovel-mercosul/placa-automovel-mercosul.component';
import { TelefoneBrComponent } from './telefone-br/telefone-br.component';
import { TelefoneBRPipe } from './pipes/telefone-br.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlacaAutomovelAntigaPipe,
    PlacaAutomovelAntigaComponent,
    PlacaAutomovelMercosulPipe,
    PlacaAutomovelMercosulComponent,
    TelefoneBrComponent,
    TelefoneBRPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
