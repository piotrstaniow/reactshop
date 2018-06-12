import * as express from 'express';
import { readFile } from "../utils";
import * as path from "path";

const products = express.Router();

products
    .get('/', async (req, res) => {
        try {
            const response = await readFile(path.join(__dirname, '../data/products.json'));
            res.send(response.toString());
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    });

export {
    products,
};
