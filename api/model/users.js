const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'An user must have a name!'],
        trim: true
    },
    age: {
        type: Number,
        required: [true, 'An user must have an age!']
    }
});

const Users = mongoose.model('Users', userSchema);

module.exports = Users;