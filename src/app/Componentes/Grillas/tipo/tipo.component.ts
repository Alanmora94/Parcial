import { Component, OnInit , Input} from '@angular/core';






@Component({
  selector: 'app-tipo',
  templateUrl: './tipo.component.html',
  styleUrls: ['./tipo.component.css']
})
export class TipoComponent implements OnInit {

  constructor() { }

  @Input() value: string;

  ngOnInit(): void {

    if (typeof this.value != 'string')

    {
      this.value = "CARGANDO..."

    }




  }

}
