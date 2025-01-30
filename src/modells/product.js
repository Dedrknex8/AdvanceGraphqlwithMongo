const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    category : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    instock : {
        type : Boolean,
        required : true,
    },
})

module.exports = mongoose.model("Products",ProductSchema);