import prompt from 'prompt-sync';
import { controleNotas } from './controleNotas';

let control: controleNotas = new controleNotas(0,0,0);
let teclado = prompt();
let option: number = 0;


while (option !== 9) {
    console.log(`==============Menu===============`);
    console.log('1. Lançar Notas       ➡         ');
    console.log('9. Sair               ↩         ');
    console.log('=================================');

    option = +teclado('Ecolha uma ação : ');

    switch (option) {
        
        case 1:
            let pnota: number = +teclado('Digite a nota do 1° Bimestre: ');
            let snota: number = +teclado('Digite a nota do 2° Bimestre: ');
            control.avalicao(pnota , snota);
            break;
            default:
            break;
    }
}