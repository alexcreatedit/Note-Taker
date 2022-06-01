import express from 'express';
import { notes } from './notes.js';

const api = express();

api.use('/notes.js', notes);

export { api };