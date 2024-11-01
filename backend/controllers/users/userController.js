const db = require("../../config");
const {generateUniqueId} = require("../../utills/generateId");
const User = require("../../models/userModel");
const bcrypt = require('bcryptjs');
const transporter = require("../../config/mailer");
const cloudinary = require("../../config/cloudinary");


require('dotenv').config({ path: `./config/config.env` });

const addNewUser = async (req, res) => {
  try {
    const { path } = req.file;
    const result = await cloudinary.uploader.upload(path, { folder: 'profile_pictures' });
    const profilePhotoUrl = result.secure_url;

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
    await db.collection("User").doc(userID).set({
      email: data.email,
      password: encryptedPassword,
      userStatus: data["userStatus"],
      name: data["name"],
      contactNo: data["contactNo"],
      bio: data["bio"],
      linkedinUrl: data["linkedinUrl"],
      currentCompany: data["currentCompany"],
      profilePhotoUrl: profilePhotoUrl,
      currPos: data["currPos"],
      currentWorkingStatus: data["currentWorkingStatus"],
      userId: userID,
      passoutYear: data.passoutYear,
    });

    res.status(200).send("User creation request sent successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const updateUserDetails = async (req, res) => {
  try{
    const userId = req.params.userId;
    const  userData  = req.body;
    let profilePhotoUrl;
    if(req.file){
    const { path } = req.file;
    const result = await cloudinary.uploader.upload(path, { folder: 'profile_pictures' });
     profilePhotoUrl = result.secure_url;

   
    }
    const updatedData = {
      ...userData,
      ...(profilePhotoUrl && {profilePhotoUrl : profilePhotoUrl})
  }

    const collectionRef = db.collection("User");
    await collectionRef.doc(userId).update(updatedData);
    return res.status(200).json({ success: true, message: "Profile update successfull !" });
  }catch (e) {
    // console.log("error here");
    return res.status(400).send(e.message);
  }
}

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


const verifyPassword = async(req,res)=>{
  const { userId, currentPassword, newPassword } = req.body;
  try{
  const collectionRef = db.collection("User");
  const detailsObj = await collectionRef.doc(userId).get();

  if(!detailsObj){
    return res.status(404).send("User does not exist");
  }
  const originalPassword = detailsObj.data().password;

  const isPasswordValid = await bcrypt.compare(currentPassword, originalPassword);
  // console.log(isPasswordValid);

  if (!isPasswordValid) {
    return res.json({ success: false, message: "Current password is incorrect" });
  }

  const encryptedPassword = await bcrypt.hash(newPassword, 10);

  await collectionRef.doc(userId).update({
    password: encryptedPassword
  });
  res.json({ success: true, message: "Password updated successfully" });
  }
  catch(error){
    res.status(500).json({ success: false, message: "Error updating password" });
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

const acceptUserRequest = async (req, res) => {
  const id = req.params.id;

  const docRef = db.collection("User").doc(id);

  await docRef.update({
    userStatus: "Approved",
  })

  const mailOptions = {
    from: {
      name: `MCA NITK`,
      address: process.env.USERNAME,
    },
    to: [`amansheo@gmail.com`],
    subject: "Your request to register have been accepted",
    html: `
        <h1>Congratulations!</h1>
        <p>Your request to register on AlumConnect MCA NITK have been accepted. You can login now.</p>
    `,
  }
  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
    }catch (e) {
      console.log(e)
    }
  }

  await sendMail(transporter, mailOptions);

}

const declineUserRequest = async (req, res) => {
  const id = req.params.id;

  const docRef = db.collection("User").doc(id);

  await docRef.delete();

  const mailOptions = {
    from: {
      name: `MCA NITK`,
      address: process.env.USERNAME,
    },
    to: [`amansheo@gmail.com`],
    subject: "Your request to register have been rejected",
    html: `
        <p>Your request to register on AlumConnect MCA NITK have been rejected. It is because we can't verify your identity as an alumni of MCA NITK.</p>
    `,
  }
  const sendMail = async (transporter, mailOptions) => {
    try {
      await transporter.sendMail(mailOptions);
    }catch (e) {
      console.log(e)
    }
  }

  await sendMail(transporter, mailOptions);
}



module.exports = {
  addNewUser,
  getUserDetailsByID,
  getAllUsersDetails,
  updateUserDetails,
  getUserRequests,
  acceptUserRequest,
  declineUserRequest,
  verifyPassword
}