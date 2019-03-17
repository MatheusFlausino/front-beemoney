/* tslint:disable */
import {
  Usuario,
  Pagamento
} from '../index';

declare var Object: any;
export interface UsuarioPagamentoInterface {
  "amount": string;
  "id"?: any;
  "id_u"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  "id_p"?: any;
  usuario?: Usuario;
  pagamento?: Pagamento;
}

export class UsuarioPagamento implements UsuarioPagamentoInterface {
  "amount": string;
  "id": any;
  "id_u": any;
  "createdAt": Date;
  "updatedAt": Date;
  "id_p": any;
  usuario: Usuario;
  pagamento: Pagamento;
  constructor(data?: UsuarioPagamentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UsuarioPagamento`.
   */
  public static getModelName() {
    return "UsuarioPagamento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UsuarioPagamento for dynamic purposes.
  **/
  public static factory(data: UsuarioPagamentoInterface): UsuarioPagamento{
    return new UsuarioPagamento(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'UsuarioPagamento',
      plural: 'user-payment',
      path: 'user-payment',
      idName: 'id',
      properties: {
        "amount": {
          name: 'amount',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "id_u": {
          name: 'id_u',
          type: 'any'
        },
        "createdAt": {
          name: 'createdAt',
          type: 'Date'
        },
        "updatedAt": {
          name: 'updatedAt',
          type: 'Date'
        },
        "id_p": {
          name: 'id_p',
          type: 'any'
        },
      },
      relations: {
        usuario: {
          name: 'usuario',
          type: 'Usuario',
          model: 'Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'id_u',
          keyTo: 'id'
        },
        pagamento: {
          name: 'pagamento',
          type: 'Pagamento',
          model: 'Pagamento',
          relationType: 'belongsTo',
                  keyFrom: 'id_p',
          keyTo: 'id'
        },
      }
    }
  }
}
