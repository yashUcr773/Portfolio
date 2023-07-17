const emailController = require('../controllers/emailController');

module.exports = function (app) {

    app.post('/apigateway/sendEmail', emailController.sendEmail)
}