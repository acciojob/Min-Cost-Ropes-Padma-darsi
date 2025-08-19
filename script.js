function mincost(arr)
{ 
//write your code here
// return the min cost

  if (arr.length === 1) return 0;

  const heap = arr.slice();         // copy the array
  heap.sort((a, b) => a - b);       // [2, 3, 4, 6]

  let totalCost = 0;

  while (heap.length > 1) {
    const first = heap.shift();     // remove smallest
    const second = heap.shift();    // remove next smallest

    const cost = first + second;
    totalCost += cost;

    heap.push(cost);                // insert new rope
    heap.sort((a, b) => a - b);     // re-sort
  }

  return totalCost;

  
}

module.exports=mincost;
