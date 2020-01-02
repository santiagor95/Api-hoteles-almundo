import { IHotelModel } from './model';

/**
 * @export
 * @interface IHotelService
 */
export interface IHotelService {

    /**
     * @returns {Promise<IHotelModel[]>}
     * @memberof IHotelService
     */
    findAll(): Promise<IHotelModel[]>;

    /**
     * @param {string} code
     * @returns {Promise<IHotelModel>}
     * @memberof IHotelService
     */

    findOne(code: string): Promise<IHotelModel>;

    /**
     * @param {IHotelModel} IHotelModel
     * @returns {Promise<IHotelModel>}
     * @memberof IHotelService
     */
    insert(IHotelModel: IHotelModel): Promise<IHotelModel>;

    /**
     * @param {string} id
     * @returns {Promise<IUserModel>}
     * @memberof IHotelService
     */
    remove(id: string): Promise<any>;
}
