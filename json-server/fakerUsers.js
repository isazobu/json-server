let faker = require('faker');
let fs = require('fs');
const uuid = require('uuid');



const generateEmployee = () => {
  return {
    id: uuid.v4(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};

const generateEmployees = (numUsers) => {
  return Array.from({ length: numUsers }, generateEmployee);
};

let dataObj = generateEmployees(50);
fs.writeFileSync('user.json', JSON.stringify(dataObj, null, '\t'));