const express = require('express')
const router = express.Router()
const User = require('../models/user')

//getting all
router.get('/', async (requ, res) =>{
    try{
        const user = await User.find()
        res.json(user)
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

//getting one
router.get('/:id', getUser, (requ, res) =>{
    res.json(res.user)
})

//create one
router.post('/', async (requ, res) =>  {
    const user = new User({
        name: requ.body.name,
        size: requ.body.size,
        crust: requ.body.crust,
        topping: requ.body.topping,
        question: requ.body.question
    })
    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

//update one
router.patch('/:id', getUser, async(req, res) =>{
    if(req.body.name != null){
        res.user.name = req.body.name
    }
    if(req.body.size != null){
        res.user.size = req.body.size
    }
    if(req.body.crust != null){
        res.user.crust = req.body.crust
    }
    if(req.body.topping != null){
        res.user.topping = req.body.topping
    }
    if(req.body.question != null){
        res.user.question = req.body.question
    }

    try{
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

//delete one
router.delete('/:id', getUser, async(requ, res) =>{
    try{
        await res.user.remove()
        res.json({message: 'deleted user'})
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

async function getUser(req, res, next){
    let user
    try{
        user = await User.findById(req.params.id)
        if(user == null){
            return res.status(404).json({message: "Can't find user"})
        }
    }catch(err){
        return res.status(500).json({message: err.message})

    }
    res.user  = user
    next()
}

module.exports = router

