import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Definindo a cor clara como padrão
  // private isDarkMode: boolean = false;

  // ngOnInit() {
  //   // Definindo a cor padrão do body ao carregar a página
  //   document.body.style.backgroundColor = '#e9ecef';
  //   document.body.style.color = 'black'; // Cor do texto para o modo claro
  // }

  // mudarCorBody() {
  //   if (this.isDarkMode) {
  //     // Muda para a cor clara
  //     document.body.style.backgroundColor = '#e9ecef';
  //     document.body.style.color = 'black'; // Ajuste para texto claro
  //   } else {
  //     // Muda para o modo escuro
  //     document.body.style.backgroundColor = '#212529';
  //     document.body.style.color = 'black'; // Ajuste para texto escuro
  //   }

  //   // Alterna o estado
  //   this.isDarkMode = !this.isDarkMode;
  // }
}
