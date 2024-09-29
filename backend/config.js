const admin = require("firebase-admin");
const serviceAccount = require("./key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Now you can access Firestore using admin.firestore()
const db = admin.firestore();
module.exports = db;
