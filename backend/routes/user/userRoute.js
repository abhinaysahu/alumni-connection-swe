const express = require('express');
const{ addNewUser, getUserDetailsByID, getAllUsersDetails, updateUserDetails, getUserRequests, acceptUserRequest,
    declineUserRequest
} = require('../../controllers/users/userController');
const { login } = require('../../controllers/users/authentication');
const router = express.Router();

router.post('/addUser', addNewUser);
router.get('/getUser/:userId', getUserDetailsByID);
router.get('/getAllUsers/', getAllUsersDetails);
router.post('/updateUser/:userId', updateUserDetails);
router.post('/userRequests', getUserRequests);
router.post('/login', login)
router.put('/accept/:id', acceptUserRequest)
router.put('/decline/:id', declineUserRequest)

module.exports = router;