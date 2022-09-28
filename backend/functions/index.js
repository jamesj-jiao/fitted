const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');

// const firebase = require('firebase');
const { admin, db, fieldValue } = require('./utils/admin');

// firebase.initializeApp(firebaseConfig);

const firebaseConfig = {
  apiKey: "AIzaSyCu7ipzaukEOU5FfhGAWYMXhqU34VfpiEg",
  authDomain: "fitted-c6368.firebaseapp.com",
  projectId: "fitted-c6368",
  storageBucket: "fitted-c6368.appspot.com",
  messagingSenderId: "1017922925655",
  appId: "1:1017922925655:web:26f3f5a3cee8d5e4c69f12"
};

const app = express();
app.use(cors());
app.options('*', cors());

addItem = (req, res) => {
    try {
      const BusBoy = require('busboy');
      const path = require('path');
      const os = require('os');
      const fs = require('fs');

      const busboy = BusBoy({ headers: req.headers });

      let formData = {};
      let imageFileName = "";
      let imageInfo = {};

      busboy.on('field', (fieldname, val) => {
          formData[fieldname] = val;
      });

      busboy.on('file', (fieldname, file, fileinfo, encoding, mimetype) => {
        const imageExtension = fileinfo.filename.split('.')[fileinfo.filename.split('.').length - 1];
        imageFileName = `${Math.round(Math.random() * 100000000)}.${imageExtension}`;

        const filepath = path.join(os.tmpdir(), imageFileName);
        mimetype = fileinfo.mimeType
        imageInfo = { filepath, mimetype };
        file.pipe(fs.createWriteStream(filepath));
      });

      busboy.on('finish', () => {
        admin
        .storage()
        .bucket()
        .upload(imageInfo.filepath, {
          resumable: false,
          destination: `${imageFileName}`,
          metadata: {
            metadata: {
              contentType: imageInfo.mimetype
            }
          }
        })
          .then(() => {
            const imageURL = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFileName}?alt=media`;
            db.collection('items').add({ ...formData, imageURL })
            return res.status(200).json({ message: "Successfully added item" });
        })
      });
      busboy.end(req.rawBody);
    } catch (err) {
        console.error(err.message);
        return res.status(403).json({ error: err.message });
    }
}


/**
 * === ROUTES ===
 */

/**
 * adds clothing items
 */
 app.post('/addItem', addItem);

exports.api = functions.https.onRequest(app);