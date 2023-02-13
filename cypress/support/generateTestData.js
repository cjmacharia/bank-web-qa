
const path = require('path');
const fs = require('fs');
const {faker} = require("@faker-js/faker");

// We want to create new customer data everytime we run tests
const createData = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  postCode: faker.random.numeric(5),
  deposit: faker.datatype.number({min: 100, max: 200}),
  withdraw: faker.datatype.number({max: 40}),
  negativeWithdraw: faker.datatype.number({min: 300})
})

module.exports.saveUsersSeed = function () {
    var data = createData();
    fs.writeFileSync(path.join(process.cwd(), "/cypress/fixtures/testData.json"), JSON.stringify(data));
    };

