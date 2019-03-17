/* tslint:disable */

declare var Object: any;
export interface CategoriaInterface {
  "name": string;
  "icon": string;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Categoria implements CategoriaInterface {
  "name": string;
  "icon": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: CategoriaInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Categoria`.
   */
  public static getModelName() {
    return "Categoria";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Categoria for dynamic purposes.
  **/
  public static factory(data: CategoriaInterface): Categoria{
    return new Categoria(data);
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
      name: 'Categoria',
      plural: 'category',
      path: 'category',
      idName: 'id',
      properties: {
        "name": {
          name: 'name',
          type: 'string'
        },
        "icon": {
          name: 'icon',
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
