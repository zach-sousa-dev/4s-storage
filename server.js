/*EXPRESS SETUP*/
const EXPRESS = require('express');
const APP = EXPRESS();

/*ROUTERS*/
const ITEMS_ROUTER = require('./routers/r-items');
APP.use('/items', ITEMS_ROUTER);

/*PORT*/
APP.listen(3000);