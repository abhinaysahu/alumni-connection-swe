const db = require("../../config");
const User = require("../../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    {
        const {email, password} = req.body;

        const collectionRef = db.collection("User");

        let user = await collectionRef.where("email" ,"==" , email).get();

        if(!user){
            return res.status(404).json({
                success: false,
                msg: "User not found"
            })
        }
        user = user.docs[0];
        user = user.data();
        console.log(user);

        const passwordMatched = await bcrypt.compare(password, user.password);

        if(passwordMatched){
            const token = jwt.sign({
                user_id: user._id,
            }, process.env.JWT_SECRET, {expiresIn: "7d"});

            const options = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure : true,
                sameSite: "none"
            }

            return res.status(201).cookie('token',token,options).json({
                success: true,
                msg: "Logged in",
                user,
                token
            })
        }

        res.status(401).json({
            success: false,
            msg: "Incorrect Password"
        })
    }

}

exports.logout = async (req, res) => {
    try{
        const options = {
            expires: new Date(Date.now()),
            httpOnly: true,
            secure : true,
            sameSite: "none"
        }
        return res.status(200).cookie('token',null,options).json({
            success: true,
            msg: "Logged out"
        })
    }catch(err){
        return res.status(401).json({
            success: false,
            msg: err.message
        })
    }
}