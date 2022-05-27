import express from 'express';
import { notes } from './notes';

const api = express();

api.use('/notes', notes);

export { api };