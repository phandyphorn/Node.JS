const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    role: {
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "roles"
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "address"
    }
})

const addressSchema = new mongoose.Schema({
    address: {
        type: String
    },
    city : {
        type: String
    }

})

const roleModel = new mongoose.model("roles", roleSchema);
const userModel = new mongoose.model("users", userSchema);
const addressModel = new mongoose.model("address", addressSchema)

module.exports.roleModel = roleModel;
module.exports.userModel = userModel;
module.exports.addressModel = addressModel;