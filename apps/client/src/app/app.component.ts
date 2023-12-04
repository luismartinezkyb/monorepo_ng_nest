import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public tasks: string[]  = [];
  constructor(
    private httpClient: HttpClient
  ){}
  public getTasks: string = 'sdas'

  ngOnInit(): void {
    console.log('Component loaded!')
  }

  getPosts():void{
    // this.posts = ['Hola mundo'];
    this.httpClient.get<string[]>('/api/tasks').subscribe(
      data=> {
        this.tasks = data;
      }
    )
    
  }
  //DEBERIAMOS CREAR UN SERVICIO PARA CONSUMIR LA API A TRAVES DEL METODO HTTP PERO LO AHREMOS AQUI SOLO PARA COMPLETAR EL EJEMPLO




}
