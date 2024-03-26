import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TabelaAlunosComponent } from './tabela-alunos/tabela-alunos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TabelaAlunosComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project2';
}
