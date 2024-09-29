const express = require('express');
const{ addNewUser, getUserDetailsByID, getAllUsersDetails, updateUserDetails } = require('../../controllers/users/userController');
const router = express.Router();

router.post('/addUser', addNewUser);
router.get('/getUser/:userId', getUserDetailsByID);
router.get('/getAllUsers/', getAllUsersDetails);
router.post('/updateUser/:userId', updateUserDetails);

module.exports = router;