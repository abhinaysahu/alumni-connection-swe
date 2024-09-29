class User {
  constructor(
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
  ) {
    this.userId = userId;
    this.email = email;
    this.password = password;
    this.name = name;
    this.contactNo = contactNo;
    this.bio = bio;
    this.linkedinUrl = linkedinUrl;
    this.passoutYear = passoutYear;
    this.currentCompany = currentCompany;
    this.profilePhotoUrl = profilePhotoUrl;
    this.currPos = currPos;
    this.currentWorkingStatus = currentWorkingStatus;
    this.userStatus = userStatus;
  }
}

module.exports = User;
