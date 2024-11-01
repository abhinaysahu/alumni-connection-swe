const express = require('express');
const{ addNewUser, getUserDetailsByID, getAllUsersDetails, updateUserDetails, getUserRequests, acceptUserRequest,
    declineUserRequest,
    verifyPassword
} = require('../../controllers/users/userController');
const { login, checkToken, logout, getUserId} = require('../../controllers/users/authentication');
const {authenticate} = require("../../middlewares/auth");
const multer = require("multer");
const upload = multer({ dest: 'uploads/' }); // Configure multer


const router = express.Router();

router.post('/addUser', upload.single('profilePhoto'), addNewUser);
router.get('/getUser/:userId', authenticate, getUserDetailsByID);
router.get('/getAllUsers/', getAllUsersDetails);
router.post('/updateUser/:userId', updateUserDetails);
router.post('/userRequests', getUserRequests);
router.post('/login', login)
router.put('/accept/:id', acceptUserRequest)
router.put('/decline/:id', declineUserRequest)
router.get('/auth/check', authenticate, checkToken)
router.get('/logout', logout)
router.get('/me', authenticate, getUserId);
router.post('/verifyPassword',verifyPassword);

module.exports = router;