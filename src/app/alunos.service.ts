import { Injectable } from '@angular/core';
import { IAluno, alunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  alunos: IAluno[] = alunos;

  constructor() { }


  obtemAlunos(){
    this.alunos = JSON.parse(localStorage.getItem("alunos") || "[]");
    return this.alunos;
  }

  incluirAluno(aluno: IAluno){
    this.alunos.push(aluno);
    localStorage.setItem("alunos", JSON.stringify(this.alunos));
  }

  limparTabela(){
    this.alunos = [];
    localStorage.clear();
    window.location.reload();
  }


}
