const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const pageNotFound = require('./routes/page_not_found');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoute);
app.use(shopRoute);
app.use(pageNotFound);


const PORT = 3000;
app.listen(3000);