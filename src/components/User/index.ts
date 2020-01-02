import { UserService } from './service';
import { HttpError } from '../../config/error';
import { IUserModel } from './model';
import { NextFunction, Request, Response } from 'express';

const userService: UserService = new UserService();

export class UserComponent {

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
            userService.findAll().then((users: IUserModel[]) => {
                res.status(200).json(users);
            });
        } catch (error) {
            next(new HttpError(error.message.status, error.message));
        }
    }

    /**
     * @export
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @returns {Promise < void >}
     */
    async findOne(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: IUserModel = await userService.findOne(req.params.id);

            res.status(200).json(user);
        } catch (error) {
            next(new HttpError(error.message.status, error.message));
        }
    }

    /**
     * @export
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @returns {Promise < void >}
     */
    async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: IUserModel = await userService.insert(req.body);

            res.status(201).json(user);
        } catch (error) {
            next(new HttpError(error.message.status, error.message));
        }
    }

    /**
     * @export
     * @param {Request} req
     * @param {Response} res
     * @param {NextFunction} next
     * @returns {Promise < void >}
     */
    async remove(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const user: IUserModel = await userService.remove(req.params.id);

            res.status(200).json(user);
        } catch (error) {
            next(new HttpError(error.message.status, error.message));
        }
    }

}
