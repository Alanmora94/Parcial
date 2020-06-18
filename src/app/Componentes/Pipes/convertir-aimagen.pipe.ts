import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenCon'
})
export class imagenCon implements PipeTransform {

  transform(value: string): string {

    let img: string;

    switch (value) {
      case 'Auto':
        img = '<mat-icon>eco</mat-icon>';
        break;

      case 'Camioneta':
        img = '<mat-icon>mediation</mat-icon>';
        break;

        case 'Camion':
        img = '<mat-icon>outlet</mat-icon>';
        break;
    }

    return img;
  }

}

