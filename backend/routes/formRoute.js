import express from 'express';
import { createForm, getAllForm } from '../controllers/formController.js';

const Router=express.Router();
Router.route('/').get(getAllForm);
Router.route('/form').post(createForm)
export default Router;