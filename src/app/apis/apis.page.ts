import { Component, OnInit } from '@angular/core';
import { CepService } from '../service/cep.service';

@Component({
  selector: 'app-apis',
  templateUrl: './apis.page.html',
  styleUrls: ['./apis.page.scss'],
})
export class ApisPage implements OnInit {
  cep : string = "79112190";
  constructor(private cepService : CepService) { }

  ngOnInit() {
  }
  pesquisarCEP(){
    this.cepService.obterEndereco(this.cep)
    .then((json) => {console.log(json)})
    .catch(((error) =>{console.log(error)})
    );
  }
}
