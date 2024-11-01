import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage {
  cep: string = '';
  endereco: any = {};
  ddd: string = '';

  constructor(private cepService: CepService) {}

  buscarEndereco() {
    if (this.cep) {
      this.cepService.buscarEndereco(this.cep).subscribe(
        (data: any) => {
          if (!data.erro) {
            this.endereco = data;
          } else {
            alert('CEP não encontrado!');
          }
        },
        (error) => {
          alert('Erro ao buscar o CEP!');
        }
      );
    }
  }

  limparCep() {
    this.cep = '';
    this.endereco = {};
    this.ddd = '';
  }
}
