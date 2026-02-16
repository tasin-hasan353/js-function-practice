const today = new Date();

console.log(today);

const date = new Date('2050-09-12');

console.log(date.getDay());

const specificDate = new Date(2050, 0, 26);
console.log(specificDate.getDate());
specificDate.setMonth(8);
console.log(specificDate.toLocaleString('en-GB'));
