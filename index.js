let obj ={
    name: 'Mirell'
    age: 17,
    cake:[vanilla, sokolate, egg],
    cat:{
        age:3,
        name: 'egg',
        gender: 'F'
    },
    parentName: 'Urmas',
    a2sd: asd,
    'parent-name': 'name'
    '2asd': 'asd',
};

console.log(obj);
console.log(obj.name);
console.log(obj.cake[1]);
console.log(obj.name);
console.log(obj['parent-name']);
console.log(Object.keys(obj));