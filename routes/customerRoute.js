const express = require('express');
const router = express.Router();
const customer = require('../controllers/customerController')

router.get('/user/all', customer.getCustomerAll);
router.get('/user/create', customer.getCreateUser);

router.post('/user/create', customer.postCreateUser);

router.get('/user/update/:id', customer.getUpdateUser)
router.post('/user/update/:id', customer.postUpdateUser)

router.get('/user/delete/:id', customer.getDeleteUser)
router.post('/user/delete/:id', customer.postDeleteUser)

module.exports = router;
