import { Component, OnInit, ElementRef ,ViewChild } from '@angular/core';

@Component({
  selector: 'app-quadrado',
  templateUrl: './quadrado.component.html',
  styleUrls: ['./quadrado.component.scss']
})
export class QuadradoComponent implements OnInit {



  @ViewChild('entrada') entrada: ElementRef;
  texto = "";
  LastList = "";
  matriz = [];

  constructor() { }



  ngOnInit(){

  }

  rotacionar(event){

    this.matriz = [];

    this.texto = this.entrada.nativeElement.value;

    var b = Array.from(this.texto.split(','),Number).filter(Number) ;

     if (Number.isInteger(Math.sqrt(b.length)) && b.length > 0)  {

      var nlistas = Math.floor(Math.sqrt(b.length));

      if (b.length % 2 != 0) {
        this.LastList = b[b.length/2-0.5].toString();
        nlistas = nlistas--
      }

      var x = 0
      var y = -1

      for(var i=0; i<Math.sqrt(b.length); i++) {
        this.matriz.push(new Array(Math.sqrt(b.length)).fill(null));
      }

      b.forEach(element => {

        if (y < Math.sqrt(b.length)-1){
          y++;
        }
        else{
          y=0;
          x++;
        }

        this.matriz[x][y] = element;

      });

      this.texto = Array.from(this.RolarElementos(Math.sqrt(b.length),Math.sqrt(b.length),this.matriz).toString().split(','),Number).filter(Number).toString();


     }
     else{
      this.texto = this.entrada.nativeElement.value + "- Inválido";
     }

    }



  voltar(event){
    this.texto = "";
  }

  RolarElementos = function(mLin, mCol, matriz) {

    var Lin = 0;
    var Col = 0;
    var Anterior = 0;
    var Atual = 0;
    var ultimaLinha = mLin;
    var ultimaColuna = mCol;

    while (Lin < ultimaLinha && Col < ultimaColuna) {

      if (Lin + 1 == ultimaLinha || Col + 1 == ultimaColuna)  break;

      Anterior = matriz[Lin + 1][Col];

      for (var i = Col; i < ultimaColuna; i++)
      {
          Atual = matriz[Lin][i];
          matriz[Lin][i] = Anterior;
          Anterior = Atual;
      }
      Lin++;

        for (var i = Lin; i < ultimaLinha; i++)
        {
            Atual = matriz[i][ultimaColuna-1];
            matriz[i][ultimaColuna-1] = Anterior;
            Anterior = Atual;
        }
        ultimaColuna--;

        if (Lin < ultimaLinha)
        {
            for (var i = ultimaColuna-1; i >= Col; i--)
            {
                Atual = matriz[ultimaLinha-1][i];
                matriz[ultimaLinha-1][i] = Anterior;
                Anterior = Atual;
            }
        }
        ultimaLinha--;

        if (Col < ultimaColuna)
        {
            for (var i = ultimaLinha-1; i >= Lin; i--)
            {
                Atual = matriz[i][Col];
                matriz[i][Col] = Anterior;
                Anterior = Atual;
            }
        }
        Col++;
    }


    return matriz;
  }

}
