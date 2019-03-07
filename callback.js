// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  let i = 0;
  arr.forEach(function(x){

    if(x == "Waldo"){
      found(i)
    }
    i++
  });
}


function actionWhenFound(i) {
  console.log("Found Waldo at index " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

// // before
// for (let i=0; i<items.length; i++) {
//   copy.push(items[i]);
// }

// // after
// items.forEach(function(item){
//   copy.push(item);
// });