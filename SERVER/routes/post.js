const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')



// router.post('/createpost',(req,res)=>{
//     const {title,body} = req.body
//     if(!title || !body){
//       return  res.status(422).json({error:"please add all the fields"})
//     }
//     const post = new Post({
//         title,
//         body,
        
//     })
// })

module.exports = router

