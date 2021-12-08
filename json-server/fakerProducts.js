let faker = require('faker');
let fs = require('fs');
const uuid = require('uuid');


const discounts = [0,10,20,50];

const randomDiscount = discounts[Math.floor(Math.random() * discounts.length)];




function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (Math.random() * (max - min + 1) + min).toFixed(2); //The maximum is inclusive and the minimum is inclusive
  }

currencyArray = ['%', '$']  

const generateEmployee = () => {
  var discount = faker.random.arrayElement(discounts)
  var price = Number(faker.commerce.price())
  console.log(discount,price,  )
  return {
    id: uuid.v4(),
    title: faker.commerce.productName(),
    category: faker.commerce.department(),
    description: faker.commerce.productDescription(),
    price: price,
    discount: discount,
    discountedPrice: (100-discount) * price / 100,
    image: faker.image.fashion(),
    createdAt: faker.datatype.datetime(),
    updateAt: faker.datatype.datetime(),
    avarageRateCount: getRandomIntInclusive(3,5),
    commentCount: Math.floor(getRandomIntInclusive(0,500)),
    isActive: faker.datatype.boolean(),
    discountType: faker.random.arrayElement(currencyArray),
    
    
  };
};

const generateEmployees = (numUsers) => {
  return Array.from({ length: numUsers }, generateEmployee);
};

let dataObj = generateEmployees(1000);
fs.writeFileSync('products.json', JSON.stringify(dataObj, null, '\t'));