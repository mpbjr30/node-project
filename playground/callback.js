setTimeout(() => {
    console.log("two seconds up")
}, 2000)

const names = ['bob', 'jim', 'michael']
const shortNames = names.filter((name) => {
    return name.length > 3;
});

//console.log(shortNames);

const geocode = (address, cb) => {


    setTimeout(() => {
        data = {
            latitude: 0,
            longitude: 0
        }
        cb(data)
    }, 3000)
}

geocode('Tewksbury', (data) => {
    console.log(data);
});


const add = (x, y, cb) => {
    setTimeout(() => {
        const total = x + y;
        cb(total);
    },
        3000
    )

}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})