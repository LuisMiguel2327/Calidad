import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  entrar(){
    console.log("bienvenido a entrar");
    let x= 10;

    for (let index = 1; index <= x;  index++)

    console.log(index)

  }
}

