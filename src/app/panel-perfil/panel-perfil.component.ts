import { Component, Input, Output ,EventEmitter} from '@angular/core';
import { Option } from '../shared/dropdown-menu/dropdown-menu.component';
import { NgFor } from '@angular/common';
import { OptionComponent } from '../shared/option/option.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-panel-perfil',
  standalone: true,
  imports: [NgFor,OptionComponent, RouterLink],
  templateUrl: './panel-perfil.component.html',
  styleUrl: './panel-perfil.component.css'
})
export class PanelPerfilComponent {
  @Input() opciones!: Option[];
  // @Input() opcion!: Option;
  // @Output() opcionSelecionada = new EventEmitter<Option>();

  // onClick(opcion: Option) {
  //   this.opcionSelecionada.emit(opcion); // Emite el evento con la opción seleccionada
  // }
}

  
class PerfilUsuario{

}
