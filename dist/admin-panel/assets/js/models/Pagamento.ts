/* tslint:disable */
import {
  Usuario,
  Fatura,
  Categoria
} from '../index';

declare var Object: any;
export interface PagamentoInterface {
  "amount": string;
  "date"?: Date;
  "description"?: string;
  "id"?: any;
  "id_u"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  "id_i"?: any;
  "id_c"?: any;
  user?: Usuario;
  invoice?: Fatura;
  category?: Categoria;
}

export class Pagamento implements PagamentoInterface {
  "amount": string;
  "date": Date;
  "description": string;
  "id": any;
  "id_u": any;
  "createdAt": Date;
  "updatedAt": Date;
  "id_i": any;
  "id_c": any;
  user: Usuario;
  invoice: Fatura;
  category: Categoria;
  constructor(data?: PagamentoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pagamento`.
   */
  public static getModelName() {
    return "Pagamento";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pagamento for dynamic purposes.
  **/
  public static factory(data: PagamentoInterface): Pagamento{
    return new Pagamento(data);
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
      name: 'Pagamento',
      plural: 'payment',
      path: 'payment',
      idName: 'id',
      properties: {
        "amount": {
          name: 'amount',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
        },
        "description": {
          name: 'description',
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
        "id_i": {
          name: 'id_i',
          type: 'any'
        },
        "id_c": {
          name: 'id_c',
          type: 'any'
        },
      },
      relations: {
        user: {
          name: 'user',
          type: 'Usuario',
          model: 'Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'id_u',
          keyTo: 'id'
        },
        invoice: {
          name: 'invoice',
          type: 'Fatura',
          model: 'Fatura',
          relationType: 'belongsTo',
                  keyFrom: 'id_i',
          keyTo: 'id'
        },
        category: {
          name: 'category',
          type: 'Categoria',
          model: 'Categoria',
          relationType: 'belongsTo',
                  keyFrom: 'id_c',
          keyTo: 'id'
        },
      }
    }
  }
}
