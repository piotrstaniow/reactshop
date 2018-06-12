import * as express from 'express';
import { categories } from './endpoints/categories';
import { products } from './endpoints/products';

const app = express();
const BASE_URL = 'http://localhost:3001';

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    next();
});

app.get('/', function(req, res) {
    res.send({
        categories: `${BASE_URL}/categories`,
        products: `${BASE_URL}/products`,
    });
});

app.use('/categories', categories);
app.use('/products', products);


app.listen(3001, function() {
    console.log(`Server is running @ ${BASE_URL}`)
});
