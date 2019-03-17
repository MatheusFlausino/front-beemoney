/* tslint:disable */
import {
  Fatura,
  Usuario
} from '../index';

declare var Object: any;
export interface NotificacaoFaturaInterface {
  "check_indebted"?: boolean;
  "check_payer"?: boolean;
  "amount": string;
  "id"?: any;
  "id_i"?: any;
  "id_ui"?: any;
  "id_up"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  invoice?: Fatura;
  user_indebted?: Usuario;
  user_payer?: Usuario;
}

export class NotificacaoFatura implements NotificacaoFaturaInterface {
  "check_indebted": boolean;
  "check_payer": boolean;
  "amount": string;
  "id": any;
  "id_i": any;
  "id_ui": any;
  "id_up": any;
  "createdAt": Date;
  "updatedAt": Date;
  invoice: Fatura;
  user_indebted: Usuario;
  user_payer: Usuario;
  constructor(data?: NotificacaoFaturaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `NotificacaoFatura`.
   */
  public static getModelName() {
    return "NotificacaoFatura";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of NotificacaoFatura for dynamic purposes.
  **/
  public static factory(data: NotificacaoFaturaInterface): NotificacaoFatura{
    return new NotificacaoFatura(data);
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
      name: 'NotificacaoFatura',
      plural: 'invoice-notification',
      path: 'invoice-notification',
      idName: 'id',
      properties: {
        "check_indebted": {
          name: 'check_indebted',
          type: 'boolean'
        },
        "check_payer": {
          name: 'check_payer',
          type: 'boolean'
        },
        "amount": {
          name: 'amount',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "id_i": {
          name: 'id_i',
          type: 'any'
        },
        "id_ui": {
          name: 'id_ui',
          type: 'any'
        },
        "id_up": {
          name: 'id_up',
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
      },
      relations: {
        invoice: {
          name: 'invoice',
          type: 'Fatura',
          model: 'Fatura',
          relationType: 'belongsTo',
                  keyFrom: 'id_i',
          keyTo: 'id'
        },
        user_indebted: {
          name: 'user_indebted',
          type: 'Usuario',
          model: 'Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'id_ui',
          keyTo: 'id'
        },
        user_payer: {
          name: 'user_payer',
          type: 'Usuario',
          model: 'Usuario',
          relationType: 'belongsTo',
                  keyFrom: 'id_up',
          keyTo: 'id'
        },
      }
    }
  }
}
