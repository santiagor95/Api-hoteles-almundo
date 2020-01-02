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
 *         description: An array of hotels
 *         content:
 *           application/json:
 *             schema:
 *               oneOf:
 *                - $ref: '#/components/schemas/HotelSchema'
 *       default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.get('/', hotelComponent.findAll);

/**
 * POST method route
 * @example http://localhost:PORT/hotels
 * @swagger
 * /hotels:
 *   post:
 *      description: Create new Hotel
 *      tags: ["hotels"]
 *      security:
 *       - ApiKeyAuth: []
 *      requestBody:
 *        description: hotel creation request body
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/HotelSchema'
 *            example:
 *               name: hotel Ejemplo
 *               stars: 5
 *               images: ['https://www.hiltonhotels.com/assets/img/Hotel%20Images/Hilton/G/GYEHIHF/GYEHIHF_quicklook_full_exterior01.jpg']
 *               price: 1000
 *      responses:
 *        201:
 *          description: return created hotel
 *          content:
 *            application/json:
 *              schema:
 *                oneOf:
 *                  - $ref: '#/components/schemas/HotelSchema'
 *        default:
 *          description: unexpected error
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Error'
 */
router.post('/', hotelComponent.create);

/**
 * GET method route
 * @example http://localhost:PORT/hotels/:id
 * @swagger
 * /hotels/{id}:
 *  get:
 *    description: Get hotel by Id
 *    tags: ["hotels"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique Id
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return hotel by id
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/HotelSchema'
 */
router.get('/:id', hotelComponent.findOne);

/**
 * DELETE method route
 * @example  http://localhost:PORT/hotels/:id
 * @swagger
 * /hotels/{id}:
 *  delete:
 *    description: Elimina hotel por Id
 *    tags: ["hotels"]
 *    security:
 *      - ApiKeyAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        description: the unique hotelId
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: return deleted hotel
 *        content:
 *          application/json:
 *            schema:
 *              oneOf:
 *                - $ref: '#/components/schemas/HotelSchema'
 */
router.delete('/:id', hotelComponent.remove);

/**
 * @export {express.Router}
 */
export default router;
