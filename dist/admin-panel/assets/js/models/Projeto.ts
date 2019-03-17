/* tslint:disable */

declare var Object: any;
export interface ProjetoInterface {
  "name": string;
  "url": string;
  "description"?: string;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Projeto implements ProjetoInterface {
  "name": string;
  "url": string;
  "description": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: ProjetoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Projeto`.
   */
  public static getModelName() {
    return "Projeto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Projeto for dynamic purposes.
  **/
  public static factory(data: ProjetoInterface): Projeto{
    return new Projeto(data);
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
      name: 'Projeto',
      plural: 'projects',
      path: 'projects',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "url": {
          name: 'url',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
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
