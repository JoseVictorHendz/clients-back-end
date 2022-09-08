const repositoryTest = require('../../repository/test');

async function test() {
   return repositoryTest.test();
};

module.exports.test = test;