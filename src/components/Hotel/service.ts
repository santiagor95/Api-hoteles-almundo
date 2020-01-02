import HotelModel, { IHotelModel } from './model';
import { IHotelService } from './interface';
import { Types } from 'mongoose';

/**
 * @export
 * @implements {IHotelModelService}
 */
export class HotelService implements IHotelService {

    /**
     * @returns {Promise < IHotelModel[] >}
     * @memberof HotelService
     */
    async findAll(): Promise<IHotelModel[]> {
        try {
            return await HotelModel.find({});
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * Buscar un hotel por id
     * @param code 
     */
    async findOne(id: string): Promise<IHotelModel> {
        try {
            return await HotelModel.findOne({
                _id: Types.ObjectId(id)
            });
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
     * Crear registro de tipo Hotel
     * @param body Estructura hotel
     */
    async insert(body: IHotelModel): Promise<IHotelModel> {
        try {
            const hotel: IHotelModel = await HotelModel.create(body);
            return hotel;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    /**
    * @param {string} id
    * @returns {Promise < IHotelModel >}
    * @memberof HotelService
    */
    async remove(id: string): Promise<any> {
        try {
            const response = await HotelModel.deleteOne({
                _id: Types.ObjectId(id)
            });

            return response;
        } catch (error) {
            throw new Error(error.message);
        }
    }

}
