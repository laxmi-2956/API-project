
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usermodel = require('../models/userModel');
require('dotenv').config();

 const  signup = async (req, res) => {
  const { username, email, dateOfBirth, role, location, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await usermodel.create({ username, email, dateOfBirth, role, location, password: hashedPassword });
    res.status(201).send('User registered successfully');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await usermodel.findOne({ username });
    if (!user) return res.status(400).send('User not found');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Invalid credentials');

    const token = jwt.sign({ id: user._id, role: user.role, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).send({ msg: 'Login successful', token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await usermodel.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await usermodel.findById(req.params.id);
    if (!user) return res.status(404).send('User not found');
    res.send(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send('User updated successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.send('User deleted successfully');
  } catch (error) {
    res.status(500).send(error.message);
  }
};


module.exports={
    signup,
    login,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser
}