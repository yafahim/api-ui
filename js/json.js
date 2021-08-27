//javaScript object notation
//JSON


const user = { id: 11, name: 'Gorib Ami' };

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    name: 'Alia Store',
    address: 'Ranbir Road',
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    isExpensive: false,
};


const shopStringified = JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified.owner);


const converted = JSON.parse(shopStringified);
console.log(converted.owner);