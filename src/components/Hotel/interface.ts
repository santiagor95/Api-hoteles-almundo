import { IHotelModel } from './model';

/**
 * @export
 * @interface IUserService
 */
export interface IUserService {

    /**
     * @returns {Promise<IUserModel[]>}
     * @memberof IUserService
     */
    findAll(): Promise<IHotelModel[]>;
}
