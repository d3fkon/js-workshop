// Welcome to objects

var obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 3,
    key4: 4
}

console.log(obj.key1);

// Objects can carry any type of values

var obj2 = {
    arr : ['elem']
}

console.log(obj2.arr[0]);

// Objectception

var obj3 = {
    World: {
        yAsia: {
            India: {
                Karnataka: 'Bangalore'
            }
        }
    }
};

console.log(obj3.World.Asia.India.Karnataka)