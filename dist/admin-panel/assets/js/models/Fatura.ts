/* tslint:disable */

declare var Object: any;
export interface FaturaInterface {
  "date_start": Date;
  "date_end": Date;
  "status_paid"?: boolean;
  "status_close"?: boolean;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Fatura implements FaturaInterface {
  "date_start": Date;
  "date_end": Date;
  "status_paid": boolean;
  "status_close": boolean;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: FaturaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Fatura`.
   */
  public static getModelName() {
    return "Fatura";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Fatura for dynamic purposes.
  **/
  public static factory(data: FaturaInterface): Fatura{
    return new Fatura(data);
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
      name: 'Fatura',
      plural: 'invoice',
      path: 'invoice',
      idName: 'id',
      properties: {
        "date_start": {
          name: 'date_start',
          type: 'Date'
        },
        "date_end": {
          name: 'date_end',
          type: 'Date'
        },
        "status_paid": {
          name: 'status_paid',
          type: 'boolean',
          default: false
        },
        "status_close": {
          name: 'status_close',
          type: 'boolean',
          default: false
        },
        "id": {
          name: 'id',
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
      }
    }
  }
}
