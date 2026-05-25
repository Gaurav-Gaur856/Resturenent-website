const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")

//Signup
const signup = async (req, res) => {
    const { email, password, name } = req.body;

    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ success: false, message: "Please Login" });
        }

        const securePassword = await bcrypt.hash(password, 10);

        user = await User.create({
            name,
            email,
            password: securePassword,
        });
        await user.save();
        return res.status(201).json({ success: true, message: "Signup successfull" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

//Login 
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ success: false, message: 'Please Signup' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
             expiresIn: '1h', 
            });
    
        res.cookie('token', token, {
            httpOnly: true,
            secure: true, // Set to true if using HTTPS
            sameSite: "none",
        })
        .status(200).json({ message: 'Login successfully' });

    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}

//logout
const logout = async (req, res) => {
    try {
        res.clearCookie("token").json({ success: true, message: "logout successfully" })
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}

// get user
const getUser = async (req, res) => {

    const reqId = req.id;
    try {
        let user = await User.findById(reqId).select("-password");

        if (!user) {
            return resp.status(400).json({ success: false, message: "User not found" });
        }
        return res.status(200).json({ success: true, user, message: "User found" });

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
}


module.exports = {
    signup,
    login,
    logout,
    getUser,
}