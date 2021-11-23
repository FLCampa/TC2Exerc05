import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaAutomovelAntiga',
})
export class PlacaAutomovelAntigaPipe implements PipeTransform {
  transform(placa: string): string {
    const placaCarroRegex = /^[a-zA-Z]{3}[0-9]{4}$/;

    let valido: boolean = placaCarroRegex.test(placa);

    if (valido) {
      let placaFormatada =
        placa.substr(0, 3).toUpperCase() + '-' + placa.substr(3);
      return placaFormatada;
    } else {
      return 'Inválido!';
    }
  }
}
