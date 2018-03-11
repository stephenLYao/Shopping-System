const MongoClient = require('mongodb').MongoClient;
const uuidv4 = require('uuid/v4');
const bcrypt = require('bcryptjs');
const dtime = require('time-formater');

async function createAdmin (username = 'tempAdmin') {
  try {
    let db = await MongoClient.connect('mongodb://localhost:27017/shopping');
    let id = 1;
    let rand = uuidv4().split('-').join('');
    let password = await bcrypt.hash(rand, 10);
    let createAt = dtime().format('YYYY-MM-DD HH:mm');
    await db.collection('admins').updateOne({ username }, { id, username, password, createAt }, { upsert: true });
    console.log(`
      username: ${username}
      password: ${rand}
      createAt: ${createAt}
      Please sign in and create a new admin immediately. Delete this user when done.
    `);
    await db.close();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

createAdmin();
