
const mongoose = require ('mongoose'); 

const schema = mongoose.Schema; 

const tweetSchema = schema({
  content:{ type: String, maxlenght: 140, minlength: 1, required: true}
}); 

const tweet = mongoose.model('tweet', tweetSchema); 
module.exports = tweet; 
