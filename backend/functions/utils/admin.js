const admin = require('firebase-admin');

// if (process.env.FIRESTORE_EMULATOR_HOST) {
//   console.log('reloaded');
//   // using firestore emulator
//   process.env.GCLOUD_PROJECT = 'relentlo-690aa';
//   process.env.FIRESTORE_EMULATOR_HOST = 'localhost:5003';
//   admin.initializeApp({
//     projectId: 'your-project-id',
//     databaseURL: ''
//   });
// } else {
admin.initializeApp();
// }
// Service account required for local hosting
// let serviceAccount = require('../../fitted-c6368-firebase-adminsdk-9etke-c5ce2d608d.json');

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     // databaseURL: 'https://fitted-c6368.firebaseio.com'
// });

const db = admin.firestore();

const fieldValue = admin.firestore.FieldValue;

module.exports = { admin, db, fieldValue };
