import * as Joi from 'joi';
import Validation from '../validation';
import { IHotelModel } from './model';

/**
 * @export
 * @class UserValidation
 * @extends Validation
 */
class UserValidation extends Validation {

    /**
     * Creates an instance of UserValidation.
     * @memberof UserValidation
     */
    constructor() {
        super();
    }


}

export default new UserValidation();
