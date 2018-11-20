const router = require('express').Router()
let Dog = require('../models/Dog')

let dogs = [{ name: "Clifford", age: 45 }]

//Logger
router.get('', (req, res, next) => {
  console.log('Woof')
  //allows knight/request to continue
  next()
})

//GET ALL DOGS
router.get('/', (req, res, next) => {
  //Returns all dogs from the database
  Dog.find({})
    .then(dogs => {
      res.send(dogs)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//GET DOG BY ID
router.get('/:id', (req, res, next) => {
  Dog.findById(req.params.id)
    .then(dog => {
      res.send(dog)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//CREATE/POST DOG
router.post('/', (req, res, next) => {
  Dog.create(req.body)
    .then(dog => {
      res.send(dog)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//EDIT DOG /api/dogs/:id
router.put('/:catId', (req, res, next) => {
  Dog.findByIdAndUpdate(req.params.dogId, req.body, { new: true })
    .then(dog => {
      res.send(dog)
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

//DELETE CAT
router.delete('/:id', (req, res, next) => {
  Dog.findByIdAndDelete(req.params.id)
    .then(deletedDog => {
      res.send('Delorted')
    })
    .catch(err => {
      res.status(400).send(err)
    })
})


//same as export default
module.exports = router