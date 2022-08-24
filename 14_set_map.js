const map = new Map();
const objKey = {name: 'foo'};
map.set(objKey, 'Maksim');
console.log(map.get(objKey));

const set = new Set();
set.add(1)
set.add(1)
set.add(2)
set.add(3)
set.add(3)
const newObj = Array.from(set);
console.log("🚀 ~ file: 14_set_map.js ~ line 13 ~ newObj", newObj)
console.log('set:', set);
