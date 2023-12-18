require('./console.js');

const counter = require('./counter.js');
console.log('counter-data:', counter.count);

const pack = require('./package.json');
console.log('welcome to the app:', pack.name);