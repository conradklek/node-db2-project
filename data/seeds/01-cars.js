// STRETCH
const cars = [
    {
        vin: 'WBAWC73578E067076',
        make: 'Honda',
        model: 'Civic',
        mileage: '10000',
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '1ZVFT80N475211367',
        make: 'Honda',
        model: 'Accord',
        mileage: '20000',
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '5N1AN0NW9BC524974',
        make: 'Honda',
        model: 'CR-V',
        mileage: '30000',
    }
]

exports.seed = async (knex) => {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
};