const express = require('express');
const { signup, getAllUsers, getSingleUser, updateUser, deleteUser, login } = require('../controllers/authcontroller');
const authroutes  = express.Router();


authroutes.post('/signup', signup);
authroutes.post('/login',login );
authroutes.get('/users', getAllUsers);
authroutes.get('/users/:id', getSingleUser);
authroutes.put('/users/:id', updateUser);
authroutes.delete('/users/:id', deleteUser);

module.exports = authroutes