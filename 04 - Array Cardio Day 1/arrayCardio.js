// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const yearBorn = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log(yearBorn);
console.table(yearBorn)
console.log(`How many people born in the 1500's: ${yearBorn.length}`);
console.log();
console.log('------------------------------');

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
console.log('Option One');
const firstLast = inventors.map(inventor => {
    const names = [];
    names.push(inventor.first, inventor.last)
    return names
});
console.log(firstLast);
console.table(firstLast);
console.log();
console.log('------------------------------');
console.log();
console.log('Option Two - The better way');
const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.table(fullName);
console.log();
console.log('------------------------------');
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log("Oldest to Youngest");

const oldToYoung = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(oldToYoung);
console.log(oldToYoung);
console.log();
console.log('------------------------------');
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
console.log('REDUCE');
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(`Total Years Living: ${totalYears}`);
console.log();
console.log('------------------------------');

// 5. Sort the inventors by years lived
console.log("Sort by Inventors Years Lived - Young(1) to Old(-1)");
console.log("To change the order switch 1 and -1");
const sortYearsLived = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? 1 : -1);
console.table(sortYearsLived); 
console.log();
console.log('------------------------------');

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// query selector will return a Node List and map is not part of the Node List  __proto__

// comment out code to prevent error. Need to runny in console of page
// const categoryLinks = document.querySelector('.mw-category');
// console.log(typeof categoryLinks);
// const links = Array.from(categoryLinks.querySelectorAll('a'))
// console.log(typeof links);
// const de = links
//                 .map(link => link.textContent)
//                 .filter(streetName => streetName.includes('de'));
// console.table(de)
console.log();
console.log('------------------------------');
// 7. sort Exercise
// Sort the people alphabetically by last na
console.log('Sort People by Last Name within people array');
const alpha = people.sort( (lastOne, nextOne) => {
    // using destructuring to assign to a variable 
    const [aLast, aFirst] = lastOne.split(', '); // split on , with space
    const [bLast, bFirst] = nextOne.split(', '); // split on , with space
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);
console.log();
console.log('------------------------------');
// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const transportation = data.reduce( (obj, item) => {
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);