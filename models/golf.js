const mongoose = require("mongoose")
const joi = require("joi")
const jwt = require("jsonwebtoken")
const passwordComplexity = require("joi-password-complexity")

const schema = new mongoose.schema({
    firstName:{type:string, required:true},
    lastName:{type:string, required:true},
    email:{type:string, required:true},
    password:{type:string, required:true}
});

