/*
1. Turn this object into a single value. Multiply each key by 3 and add them up. Try doing it in a single method chain!
*/
// const obj = {
//     val1: 4,
//     val2: 5,
//     val3: 6,
// };

// // Finish this:
// //const sum =

// // Solution
// const sum = Object.keys(obj)
//     .map(function(key) {
//         return obj[key] * 3;
//     }).reduce(function(accum, next) {
//         return accum + next;
//     });

// console.log(sum);
/*
2. Turn this object into a single value. Filter out all items with a negative cost. Multiply the cost of each remaining item times the amount purchased and add it all up. Try doing it in a single method chain!
*/

const obj = {
  groceries: {
    cost: 33.22,
    amount: 1,
  },
  rent: {
    cost: 899.0,
    amount: 1,
  },
  paycheck: {
    cost: -2000,
    amount: 2,
  },
  restaurantBills: {
    cost: 20,
    amount: 4,
  },
};

// Finish this:
//const sum =

// Solution
const sum = Object.keys(obj)
  .map(function (key) {
    return obj[key];
  })
  .filter(function (item) {
    return item.cost > 0;
  })
  .map(function (item) {
    return item.cost * item.amount;
  })
  .reduce(function (sum, next) {
    return sum + next;
  });

console.log(sum);
