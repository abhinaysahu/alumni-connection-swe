const db = require("../../config");
const User = require("../../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    {
        const {email, password} = req.body;

        const collectionRef = db.collection("User");
        let user = await collectionRef.where("email" ,"==" , email).get();

        if(email === "admin@gmail.com" && password === "Admin@123") {
            const token = jwt.sign({
                user_id: "12345",
            }, process.env.JWT_SECRET, {expiresIn: "7d"});

            const options = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure : true,
                sameSite: "none"
            }

            console.log("success");

            return res.status(200).cookie('token',token,options).json({
                success: true,
                msg: "Admin",
                token,
                user
            })
        }



        if(user.docs.length === 0){
            return res.status(401).json({
                success: false,
                msg: "User not found"
            })
        }
        user = user.docs[0];
        user = user.data();

        if(user.userStatus !== "Approved"){
            return res.status(401).json({
                success: false,
                msg: "Wait for admin to approve your account"
            })
        }

        const passwordMatched = await bcrypt.compare(password, user.password);

        if(passwordMatched){
            const token = jwt.sign({
                user_id: user.userId,
            }, process.env.JWT_SECRET, {expiresIn: "7d"});

            const options = {
                expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure : true,
                sameSite: "none"
            }

            console.log("success");

            return res.status(200).cookie('token',token,options).json({
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

exports.checkToken = async (req, res) => {
    const {token} = req.cookies;
    // console.log("Token"+  token);

    const collectionRef = db.collection("User");

    const detailsObj = await collectionRef.doc(req.user_id).get();
    if(!detailsObj){
        return res.status(404).send("User does not exist");
    }

    const user = detailsObj.data();

    if (!token) {
        return res.status(401).json({ authenticated: false });
    }

    try {
        // Verify the token (e.g., using jwt.verify)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return res.status(200).json({ authenticated: true, user: user });
    } catch (err) {
        return res.status(500).json({authenticated: false});
    }
}

exports.getUserId = async (req, res) => {
    try {
        // console.log(req.user_id);
        return res.status(200).json({id: req.user_id});
    }catch (e) {
        return res.status(500).json({msg: e.message});
    }
}