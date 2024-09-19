import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// CARDS IMPORTS
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ContatoComponent } from './contato/contato.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    HomeComponent,
    SobreComponent,
    ServicosComponent,
    PortifolioComponent,
    InicioComponent,
    ContatoComponent ,

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

}
