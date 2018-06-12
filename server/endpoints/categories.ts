import * as express from 'express';
import { readFile } from "../utils";
import * as path from 'path';

const categories = express.Router();

categories
    .get('/', async (req, res) => {
        try {
            const response = await readFile(path.join(__dirname, '../data/categories.json'));
            res.send(response.toString());
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });

export {
    categories,
};
