/* tslint:disable */
import {
  Usuario
} from '../index';

declare var Object: any;
export interface ToDoInterface {
  "message": string;
  "check": boolean;
  "id"?: any;
  "provider"?: string;
  "authScheme"?: string;
  "externalId"?: string;
  "profile"?: any;
  "credentials"?: any;
  "created"?: Date;
  "modified"?: Date;
  "id_u"?: any;
  "createdAt": Date;
  "updatedAt": Date;
  user?: Usuario;
}

export class ToDo implements ToDoInterface {
  "message": string;
  "check": boolean;
  "id": any;
  "provider": string;
  "authScheme": string;
  "externalId": string;
  "profile": any;
  "credentials": any;
  "created": Date;
  "modified": Date;
  "id_u": any;
  "createdAt": Date;
  "updatedAt": Date;
  user: Usuario;
  constructor(data?: ToDoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ToDo`.
   */
  public static getModelName() {
    return "ToDo";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ToDo for dynamic purposes.
  **/
  public static factory(data: ToDoInterface): ToDo{
    return new ToDo(data);
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
      name: 'ToDo',
      plural: 'todoList',
      path: 'todoList',
      idName: 'id',
      properties: {
        "message": {
          name: 'message',
          type: 'string'
        },
        "check": {
          name: 'check',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
        "provider": {
          name: 'provider',
          type: 'string'
        },
        "authScheme": {
          name: 'authScheme',
          type: 'string'
        },
        "externalId": {
          name: 'externalId',
          type: 'string'
        },
        "profile": {
          name: 'profile',
          type: 'any'
        },
        "credentials": {
          name: 'credentials',
          type: 'any'
        },
        "created": {
          name: 'created',
          type: 'Date'
        },
        "modified": {
          name: 'modified',
          type: 'Date'
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
