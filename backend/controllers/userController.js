// Register new user
// POST /api/users
// public
const registerUser = (req, res) => {
    res.json({ message: 'Register User'})
}
// Authenticate a user
// POST /api/users/login
// public
const loginUser = (req,res) =>{
    res.json({message: 'Login User'})
}
// Get user data
// GET /api/users/me
// public
const getMe = (req,res) =>{
    res.json({message: 'User data'})
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}