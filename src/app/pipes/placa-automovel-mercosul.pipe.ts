import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placaAutomovelMercosul',
})
export class PlacaAutomovelMercosulPipe implements PipeTransform {
  transform(placa: string): string {
    const placaCarroRegex = /^[a-zA-Z]{3}[0-9][a-zA-Z][0-9]{2}$/;

    let valido: boolean = placaCarroRegex.test(placa);

    if (valido) {
      let placaFormatada =
        placa.substr(0, 3).toUpperCase() +
        '-' +
        placa.charAt(3) +
        '-' +
        placa.charAt(4).toUpperCase() +
        '-' +
        placa.substr(5);

      return placaFormatada;
    } else {
      return 'Inválido!';
    }
  }
}
