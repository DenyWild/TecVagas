import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos-candidato',
  templateUrl: './cursos-candidato.component.html',
  styleUrls: ['./cursos-candidato.component.scss'],
})
export class CursosCandidatoComponent implements OnInit{

  cursos: Curso[] = [

    {id: '1', nome: 'Angular', nome_instituicao: 'Minha cabeça', ano_conclusao: '10/01/2001', duracao: 230}

  ];
  displayedColumns = ['nome', 'nome_instituicao', 'ano_conclusao', 'duracao'];

  constructor(){
  }

  ngOnInit(): void {

  }

}
