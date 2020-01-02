import { UserService } from './service';
import { HttpError } from '../../config/error';
import { IHotelModel } from './model';
import { NextFunction, Request, Response } from 'express';

const userService: UserService = new UserService();

export class HotelComponent {

    // private userService: UserService = new UserService;

    constructor() { }

    /**
     * @export
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     */
    findAll(req: Request, res: Response, next: NextFunction): void {
        try {
            userService.findAll().then((users: IHotelModel[]) => {
                res.status(200).json(users);
            });
        } catch (error) {
            next(new HttpError(error.message.status, error.message));
        }
    }

}
