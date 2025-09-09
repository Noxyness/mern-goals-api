const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


// Register new user
// POST /api/users
// public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error ('Please add all fields')
    }

    //check if the user exist

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error ('User already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //createuser

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }else {
        res.status(400)
        throw new Error ('Invalid User Data')
    }


})
// Authenticate a user
// POST /api/users/login
// public
const loginUser = asyncHandler(async (req,res) =>{
    const {email, password} = req.body

    //check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error ('Invalid credentials')
    }
})
// Get user data
// GET /api/users/me
// public
const getMe = asyncHandler(async (req,res) =>{
    res.json({message: 'User data'})
})

module.exports = {
    registerUser,
    loginUser,
    getMe,
}