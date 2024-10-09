const express = require('express');
const{ addNewUser, getUserDetailsByID, getAllUsersDetails, updateUserDetails, getUserRequests} = require('../../controllers/users/userController');
const router = express.Router();

router.post('/addUser', addNewUser);
router.get('/getUser/:userId', getUserDetailsByID);
router.get('/getAllUsers/', getAllUsersDetails);
router.post('/updateUser/:userId', updateUserDetails);
router.get('/userRequests', getUserRequests);

module.exports = router;