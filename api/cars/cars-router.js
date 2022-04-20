const express = require("express")

const Car = require('./cars-model')

const {
    checkCarId,
    checkVinNumberValid,
    checkVinNumberUnique,
    checkCarPayload
} = require('./cars-middleware')

const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Car.getAll()
        res.status(200).json(cars)
    } catch (err) {
        next(err)
    }
})
router.get('/:id', checkCarId, async (req, res) => {
    res.json(req.car)
})
router.post('/', checkCarPayload, checkVinNumberValid, checkVinNumberUnique, async (req, res) => {
  try {
    const car = await Car.create(req.body)
    res.status(201).json(car)
  } catch (err) {
    res.status(500).json({ message: 'error creating car' })
  }
})

module.export = router