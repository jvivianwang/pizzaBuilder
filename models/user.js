const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    size:{
        type: String,
        required: true
    },

    crust:{
        type: String,
        required: true
    },

    topping:{
        type: Array,
        required: true

    },

    question:{
        type: String
    }
})

module.exports = mongoose.model('User', userSchema);
