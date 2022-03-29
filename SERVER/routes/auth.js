const express = require('express')
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();
const requireLogin = require('../middleware/requireLogin')
const router = express.Router()

router.get('/protected',requireLogin,(req,res)=>{
    res.send('hello user')
})

router.post('/Signup',(req,res)=>{
    const {name,email,password} = req.body
    if(!email ||!password||!name){
        return res.status(422).json({Error:' Please add all the fields'})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:'user already exists with that email'})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{


        const user = new User({
            name,
            email,
            password:hashedpassword
           
        })

        user.save()
        .then(user=>{
            res.json({message:'Saved Successfully'})
        })
        .catch(err=>{
            console.log(err)
        })
    })
    .catch(err=>{
        console.log(err)
    })
})
})

router.post('/Signin',(req,res)=>{
    const{email,password} = req.body
    if(!email || !password){
       return res.status(422).json({error:'Please add email or password'})
    }
    User.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
           return res.status(422).json({error:'Invalid email or password'})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:'Signed in Successfully'})
                const token = jwt.sign({_id:savedUser._id},process.env.JWT_SECRET)
                const {_id,name,email} = savedUser
                res.json({token,user:{_id,name,email}})
            }
            else{
                return res.status(422).json({error:'Invalid email or password'})
                
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

module.exports = router