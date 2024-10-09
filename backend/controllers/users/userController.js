const db = require("../../config");
const {generateUniqueId} = require("../../utills/generateId");
const User = require("../../models/userModel");
const bcrypt = require('bcryptjs');

const addNewUser = async (req, res) => {
  try {
    const data = req.body;
    const collectionRef = db.collection("User");
    const collectionSnapshot = await collectionRef.get();
    if (collectionSnapshot.empty) {
      await collectionRef.doc("UserId").set({});
    }

    const userID = generateUniqueId();
    data["userId"] = userID;
    data["userStatus"] = "Pending";
    const encryptedPassword = await bcrypt.hash(data["password"], 10);
    data["password"] = encryptedPassword;
    await db.collection("User").doc(userID).set(data);

    res.status(200).send("User creation request sent successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getUserDetailsByID = async (req, res) => {
  try{
    const userId = req.params.userId;
    const collectionRef = db.collection("User");
    const detailsObj = await collectionRef.doc(userId).get();
    if(!detailsObj){
      return res.status(404).send("User does not exist");
    }
    const details = detailsObj.data();
    const email = details.email;
    const password = details.password;
    const name = details.name;
    const contactNo = details.contactNo;
    const bio = details.bio;
    const linkedinUrl = details.linkedinUrl;
    const passoutYear = details.passoutYear;
    const currentCompany = details.currentCompany;
    const profilePhotoUrl = details.profilePhotoUrl;
    const currPos = details.currPos;
    const currentWorkingStatus = details.currentWorkingStatus;
    const userStatus = details.userStatus;

    return res.status(200).send(new User(
        userId,
        email,
        password,
        name,
        contactNo,
        bio,
        linkedinUrl,
        passoutYear,
        currentCompany,
        profilePhotoUrl,
        currPos,
        currentWorkingStatus,
        userStatus
    ));
  }catch (e) {
    return res.status(400).send(e.message);
  }
}

const getAllUsersDetails = async (req, res) => {
  try{
    const collectionRef = db.collection("User");
    const responseObject = await collectionRef.get();
    let responses = [];
    responseObject.forEach((obj) =>{
      const details = obj.data();

      const userId = obj.id;
      const email = details.email;
      const password = details.password;
      const name = details.name;
      const contactNo = details.contactNo;
      const bio = details.bio;
      const linkedinUrl = details.linkedinUrl;
      const passoutYear = details.passoutYear;
      const currentCompany = details.currentCompany;
      const profilePhotoUrl = details.profilePhotoUrl;
      const currPos = details.currPos;
      const currentWorkingStatus = details.currentWorkingStatus;
      const userStatus = details.userStatus;

      responses.push(new User(
          userId,
          email,
          password,
          name,
          contactNo,
          bio,
          linkedinUrl,
          passoutYear,
          currentCompany,
          profilePhotoUrl,
          currPos,
          currentWorkingStatus,
          userStatus
      ));
    })
    return res.status(200).send(responses);
  }catch (e) {
    return res.status(400).send(e.message);
  }
}

const updateUserDetails = async (req, res) => {
  try{
    const userId = req.params.userId;
    const  newUserData  = req.body;

    const collectionRef = db.collection("User");
    await collectionRef.doc(userId).update(newUserData);
    return res.status(200).send("User updated successfully");
  }catch (e) {
    return res.status(400).send(e.message);
  }
}

const getUserRequests = async (req, res) => {
  try{
    const ref = db.collection("User");
    const responseObj = await ref.where("userStatus","==","Pending").get();
    let responses = [];
    responseObj.forEach((obj) =>{
      const details = obj.data();

      const userId = obj.id;
      const email = details.email;
      const password = details.password;
      const name = details.name;
      const contactNo = details.contactNo;
      const bio = details.bio;
      const linkedinUrl = details.linkedinUrl;
      const passoutYear = details.passoutYear;
      const currentCompany = details.currentCompany;
      const profilePhotoUrl = details.profilePhotoUrl;
      const currPos = details.currPos;
      const currentWorkingStatus = details.currentWorkingStatus;
      const userStatus = details.userStatus;

      responses.push(new User(
          userId,
          email,
          password,
          name,
          contactNo,
          bio,
          linkedinUrl,
          passoutYear,
          currentCompany,
          profilePhotoUrl,
          currPos,
          currentWorkingStatus,
          userStatus
      ));
    })
    return res.status(200).send(responses);

  }catch (e){
    return res.status(400).send(e.message);
  }
}

module.exports = {
  addNewUser,
  getUserDetailsByID,
  getAllUsersDetails,
  updateUserDetails,
  getUserRequests
}
