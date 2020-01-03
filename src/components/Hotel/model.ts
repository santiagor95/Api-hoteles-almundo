import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import { Document, Schema } from 'mongoose';
import { NextFunction } from 'express';

/**
 * @export
 * @interface IHotelModel
 * @extends {Document}
 */
export interface IHotelModel extends Document {
    name: string;
    stars: string;
    images: string[];
    price: number;
}

/**
 * @swagger
 * components:
 *  schemas:
 *    HotelSchema:
 *      required:
 *        - name
 *      properties:
 *        id:
 *          type: string
 *        name:
 *          type: string
 *        stars:
 *          type: number
 *        images:
 *          type: array
 *        price:
 *          type: string
 *    Hotels:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/HotelSchema'
 */
const HotelSchema: Schema<any> = new Schema({
    name: String,
    stars: Number,
    images: Array,
    price: Number
}, {
    collection: 'hotel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise<void> {
    const hotel: any = this; // tslint:disable-line

    if (!hotel.isModified('password')) {
        return next();
    }

    try {
        const salt: string = await bcrypt.genSalt(10);

        const hash: string = await bcrypt.hash(hotel.password, salt);

        hotel.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

export default connections.db.model<IHotelModel>('HotelModel', HotelSchema);
