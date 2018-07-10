const mongoose = require("mongoose");


const options = {
  dbuser: 'admin',
  dbpassword: 'admin369147'
}

const uri = `mongodb://${options.dbuser}:${options.dbpassword}@ds223161.mlab.com:23161/db_contact`;

mongoose.connect(uri)
  .then(() => {
    console.log('MongoDB connected! 😍 😎');
  })
  .catch(err => console.log(err, '😪 😫'));

module.exports = mongoose;