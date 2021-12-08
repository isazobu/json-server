let faker = require('faker');
let fs = require('fs');
const uuid = require('uuid');



const generateEmployee = () => {
  return {
    id: uuid.v4(),
    title: faker.commerce.department(),
    image: faker.image.sports(),
    url: faker.image.imageUrl()
  }
  };


const generateEmployees = (numUsers) => {
  return Array.from({ length: numUsers }, generateEmployee);
};

let dataObj = generateEmployees(20);
fs.writeFileSync('categories.json', JSON.stringify(dataObj, null, '\t'));