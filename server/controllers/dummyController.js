exports.function1 = function1
exports.function2 = function2
exports.function3 = function3

function function1(req, res, next) {
    res.send({ success: true, type: 'function1' })
}
function function2(req, res, next) {
    res.send({ success: false, type: 'function2' })
}
function function3(req, res, next) {
    res.send({ success: true, type: 'function3' })
}