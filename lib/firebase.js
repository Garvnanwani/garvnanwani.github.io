import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      project_id: 'portfolio-de2e7'
    }),
    databaseURL: 'https://portfolio-de2e7-default-rtdb.firebaseio.com'
  })
}

export default admin.database()
