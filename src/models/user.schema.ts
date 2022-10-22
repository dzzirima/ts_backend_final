/**
 * @openapi
 * components:
 *   schemas:
 *     CreateUserInput:
 *       type: object
 *       required:
 *         - email
 *         - name
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           default: jane.doe@example.com
 *         name:
 *           type: string
 *           default: jane
 *         password:
 *           type: string
 *           default: password
 */