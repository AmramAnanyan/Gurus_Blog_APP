import { body } from 'express-validator';
export const POST_FIELDS_VALIDATORS = [
  body('title').isString().withMessage('Title must be a string').notEmpty(),
  body('description')
    .notEmpty()
    .isString()
    .withMessage('Description must be a string'),
];
