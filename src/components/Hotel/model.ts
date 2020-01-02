import * as bcrypt from 'bcrypt';
import * as connections from '../../config/connection/connection';
import * as crypto from 'crypto';
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
 *          format: date
 *    Users:
 *      type: array
 *      items:
 *        $ref: '#/components/schemas/UserSchema'
 */
const UserSchema: Schema<any> = new Schema({
    name: String,
    stars: String,
    images: Array,
    price: Number
}, {
    collection: 'hotel',
    versionKey: false
}).pre('save', async function (next: NextFunction): Promise<void> {
    const user: any = this; // tslint:disable-line

    if (!user.isModified('password')) {
        return next();
    }

    try {
        const salt: string = await bcrypt.genSalt(10);

        const hash: string = await bcrypt.hash(user.password, salt);

        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

export default connections.db.model<IHotelModel>('HotelModel', UserSchema);
