import { Router } from 'express';
import { HotelComponent } from '../components';

const hotelComponent: HotelComponent = new HotelComponent();

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/**
 * GET method route
 * @example http://localhost:PORT/hotels
 * @swagger
 * /hotels:
 *   get:
 *     description: Obtiene todos los hoteles registrados en la base de datos
 *     tags: ["hotels"]
 *     security:
 *      - ApiKeyAuth: []
 *     responses:
 *       200:
 *         description: An array of users
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/Users'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', hotelComponent.findAll);

/**
 * @export {express.Router}
 */
export default router;
