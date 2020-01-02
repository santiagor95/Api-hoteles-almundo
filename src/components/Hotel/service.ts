import * as Joi from 'joi';
import HotelModel, { IHotelModel } from './model';
import UserValidation from './validation';
import { IUserService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IUserModelService}
 */
export class UserService implements IUserService {
    /**
     * @returns {Promise < IUserModel[] >}
     * @memberof UserService
     */
    async findAll(): Promise<IHotelModel[]> {
        try {
            return await HotelModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    }

}
