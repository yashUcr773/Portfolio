const dummyController = require('../controllers/dummyController');

module.exports = function (app) {

    app.get('/apigateway/data1', dummyController.function1);
    app.get('/apigateway/data2', dummyController.function2);
    app.post('/apigateway/data1', dummyController.function3);
    
}