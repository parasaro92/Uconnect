const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config();
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error:'You must be logged in'})
    }
    const token = authorization.replace("Bearer","")
    jwt.verify(token,process.env.JWT_SECRET,(err,payload)=>{
        if(err){
            res.status(401).json({error:'You must be logged in'})
        }
        const{_id} = payload
        User.findById(_id).then(userData=>{
            req.user=userData
            next()
            
        })
        
    })

}