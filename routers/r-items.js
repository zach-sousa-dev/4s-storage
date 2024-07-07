/*EXPRESS SETUP*/
const EXPRESS = require('express');
/*ROUTER*/
const ROUTER = EXPRESS.Router();


/*ROUTES*/

//  Note: all the routes are prefaced with "items". 
//  Ex. hostname:3000/items/24

ROUTER      //  This handles basic CRUD.

    .route("/:id")              //  Route requests for items/ID into here. 
    .get((req, res) => {        //  Get data corresponding to item with ID.
        res.status(200).send(`Get called for ID ${req.params.id}`);
    })

    .put((req, res) => {        //  Update data for item with ID.
        res.status(200).send(`Put called for ID ${req.params.id}`);
    })

    .delete((req, res) => {     //  Delete data for item with ID here (the body won't be recieved due to 204).
        res.status(204).send(`Delete called for ID ${req.params.id}`);
    })

    .post((req, res) => {       //  Create new item.
        res.status(201).send(`Post called for ID ${req.params.id}`);
    })

;


/*MIDDLEWARE*/

ROUTER.param("id", (req, res, next, id) => {
    const REGEX = /^[0-9]+$/;
    if(REGEX.test(id)) {
        next();
    } else {
        res.status(400).send("The received ID was non-numerical (invalid).");
        console.log("INVALID INPUT: " + id);
    }
});


/*EXPORT*/

module.exports = ROUTER;