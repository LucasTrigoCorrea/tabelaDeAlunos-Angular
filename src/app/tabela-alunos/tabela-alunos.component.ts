import {  NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { IAluno, alunos } from '../alunos';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-tabela-alunos',
  standalone: true,
  imports: [RouterModule, RouterOutlet, FormsModule, NgIf, NgFor, RouterLink],
  templateUrl: './tabela-alunos.component.html',
  styleUrl: './tabela-alunos.component.css'
})
export class TabelaAlunosComponent implements OnInit{

  constructor(
    private alunosService: AlunosService,
  ){}

  nome = "";
  nota1 = 0;
  nota2= 0;
  media = 0;
  situacao= "";
  alunos = alunos;

  

  ngOnInit(): void {
      this.alunos = this.alunosService.obtemAlunos();

    }
  
  
  adicionarAluno(){
    this.media = (this.nota1 + this.nota2) / 2;
    this.situacaoAluno();
     const aluno: IAluno = {
       nome: this.nome,
       nota1: this.nota1,
       nota2: this.nota2,
       media: this.media,
       situacao: this.situacao
     }
     this.alunosService.incluirAluno(aluno);
   }

   situacaoAluno(){
    if(this.media >= 7){
      this.situacao = "Aprovado";
    }else if(this.media < 5){
      this.situacao = "Reprovado";
    } else {
      this.situacao = "Recuperação";
    }
  }
  
   limparTabela(){
    this.alunosService.limparTabela();
   }
  
  
  }
  

    