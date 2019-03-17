/* tslint:disable */

declare var Object: any;
export interface FaqInterface {
  "question": string;
  "answer": string;
  "id"?: any;
  "createdAt": Date;
  "updatedAt": Date;
}

export class Faq implements FaqInterface {
  "question": string;
  "answer": string;
  "id": any;
  "createdAt": Date;
  "updatedAt": Date;
  constructor(data?: FaqInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Faq`.
   */
  public static getModelName() {
    return "Faq";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Faq for dynamic purposes.
  **/
  public static factory(data: FaqInterface): Faq{
    return new Faq(data);
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
      name: 'Faq',
      plural: 'faqs',
      path: 'faqs',
      idName: 'id',
      properties: {
        "question": {
          name: 'question',
          type: 'string'
        },
        "answer": {
          name: 'answer',
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
