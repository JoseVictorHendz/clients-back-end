const serviceTest = require('../../core/service/test');

async function test() {
    return serviceTest.test();
};

module.exports.test = test;