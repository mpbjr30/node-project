const name = 'Michael';
const userAge = '49';

const user = {
    name,
    age: userAge,
    location: 'Tewksbury'
}

console.log(user);


// destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 3.2
}

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;

// console.log(productLabel);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log("Type: " + type + " label " + label + " stock " + stock);
}

transaction('order', product)