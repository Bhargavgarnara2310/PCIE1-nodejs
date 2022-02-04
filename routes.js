const express = require('express');
const router = express.Router();

const Customer = require('./models/customer');
const Vehicle = require('./models/vehicle');

// customer master

// for fetch the data
router.get('/customer', async (request, response) => {  
    const data = await Customer.find();
    response.send(data);
});

// for insert the data
router.post('/customer', async (request, response) => {    
    const customer = new Customer(request.body)
    await customer.save();
    response.send(customer);
})

// for update the data
router.patch('/customer/:id', async (request, response) => {    
    const _id = request.params.id;
    const customer = await Customer.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(customer);
})

// for delete the data
router.delete('/customer', async (request, response) => {  
    const data = await Customer.deleteMany({});
    response.send(data);
});


router.delete('/customer/:id', async (request, response) => {   
        const _id = request.params.id;
        const customer = await Customer.findByIdAndDelete(_id);
        response.send(customer);
})

// Vehicle 

//for fetch data
router.get('/vehicle', async (request, response) => {  
    const data = await Vehicle.find();
    response.send(data);
});

//for insert data
router.post('/vehicle', async (request, response) => {    
    const ivehicle = new Vehicle(request.body)
    await ivehicle.save();
    response.send(ivehicle);
})

//for update data
router.patch('/vehicle/:id', async (request, response) => {    
    const _id = request.params.id;
    const ivehicle = await Vehicle.findByIdAndUpdate(_id, request.body, {new: true});
    response.send(ivehicle);
})

//for delete data
router.delete('/vehicle', async (request, response) => {  
    const data = await Vehicle.deleteMany({});
    response.send(data);
});


module.exports = router;