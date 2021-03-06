const mongoose = require('mongoose');
// Define Schemes
const userSchema = new mongoose.Schema({
  name: { type: String, require: true},
  contribution_time: { type: Number}
},
{
  timestamps: true
});
userSchema.statics.create = function (payload) {
    const user = new this(payload);
    // return Promise
    user.save();
    return user
  };

module.exports = mongoose.model('User', userSchema);