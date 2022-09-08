const useCaseTest = require('../../core/use-case/test');

async function test(request, response) {
    const res = await useCaseTest.test()
    
    response.json(res);
};

module.exports.test = test;