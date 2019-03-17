/* tslint:disable */
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { Storage } from '../../models/Storage';
import { Faq } from '../../models/Faq';
import { UsuarioPagamento } from '../../models/UsuarioPagamento';
import { Projeto } from '../../models/Projeto';
import { Pagamento } from '../../models/Pagamento';
import { Fatura } from '../../models/Fatura';
import { NotificacaoFatura } from '../../models/NotificacaoFatura';
import { Categoria } from '../../models/Categoria';
import { ToDo } from '../../models/ToDo';
import { Mural } from '../../models/Mural';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    Usuario: Usuario,
    Storage: Storage,
    Faq: Faq,
    UsuarioPagamento: UsuarioPagamento,
    Projeto: Projeto,
    Pagamento: Pagamento,
    Fatura: Fatura,
    NotificacaoFatura: NotificacaoFatura,
    Categoria: Categoria,
    ToDo: ToDo,
    Mural: Mural,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
