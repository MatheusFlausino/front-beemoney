/* tslint:disable */
import {
  Usuario
} from '../index';

declare var Object: any;
export interface MuralInterface {
  "message": string;
  "date"?: Date;
  "id"?: any;
  "id_u"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  user?: Usuario;
}

export class Mural implements MuralInterface {
  "message": string;
  "date": Date;
  "id": any;
  "id_u": any;
  "createdAt": Date;
  "updatedAt": Date;
  user: Usuario;
  constructor(data?: MuralInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Mural`.
   */
  public static getModelName() {
    return "Mural";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Mural for dynamic purposes.
  **/
  public static factory(data: MuralInterface): Mural{
    return new Mural(data);
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
      name: 'Mural',
      plural: 'dashboards',
      path: 'dashboards',
      idName: 'id',
      properties: {
        "message": {
          name: 'message',
          type: 'string'
        },
        "date": {
          name: 'date',
          type: 'Date'
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
      }
    }
  }
}
