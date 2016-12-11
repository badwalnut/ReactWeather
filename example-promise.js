// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temperature)
// {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temperature)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temperature) {
//   console.log('promise success', temperature);
// }, function (err) {
//   console.log('promise error', err);
// })

// Challenge area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
         if (typeof a === 'number' && typeof b === 'number') {
           resolve(a + b);
         } else {
           reject('either a or b is not a number');
         }
       });
   }

addPromise(6, 9).then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});

addPromise(6, 'fred').then(function (sum) {
  console.log('promise success', sum);
}, function (err) {
  console.log('promise error', err);
});
