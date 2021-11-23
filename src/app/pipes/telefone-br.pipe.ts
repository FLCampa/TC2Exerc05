import { Pipe, PipeTransform } from '@angular/core';

const conversionList: Map<string, string> = new Map();

@Pipe({
  name: 'telefoneBR',
})
export class TelefoneBRPipe implements PipeTransform {
  transform(telefone: string): string {
    let valor = telefone;
    const telefoneBrRegex = /^[0-9]{0,13}$/;

    let valido: boolean = telefoneBrRegex.test(valor);

    if (valido) {
      let telefoneFormatado: string;
      telefone = '';
      let tamanhoValor = valor.length;

      switch (tamanhoValor) {
        case 8:
          return (telefoneFormatado =
            valor.substr(0, 4) + '-' + valor.substr(5, 8));
        case 9:
          return (telefoneFormatado =
            valor.substr(0, 1) +
            ' ' +
            valor.substr(1, 4) +
            '-' +
            valor.substr(5, 4));
        case 10:
          return (telefoneFormatado =
            '(' +
            valor.substr(0, 2) +
            ') ' +
            valor.substr(2, 4) +
            '-' +
            valor.substr(6, 4));
        case 11:
          return (telefoneFormatado =
            '(' +
            valor.substr(0, 2) +
            ') ' +
            valor.substr(2, 1) +
            ' ' +
            valor.substr(3, 4) +
            '-' +
            valor.substr(7, 4));
        case 12:
          return (telefoneFormatado =
            '+' +
            valor.substr(0, 2) +
            ' (' +
            valor.substr(2, 2) +
            ') ' +
            valor.substr(4, 4) +
            '-' +
            valor.substr(8, 4));
        case 13:
          return (telefoneFormatado =
            '+' +
            valor.substr(0, 2) +
            ' (' +
            valor.substr(2, 2) +
            ') ' +
            valor.substr(4, 1) +
            ' ' +
            valor.substr(5, 4) +
            '-' +
            valor.substr(9, 4));
        default:
          return 'Inválido!';
      }
    } else {
      return 'Inválido!';
    }
  }
}
