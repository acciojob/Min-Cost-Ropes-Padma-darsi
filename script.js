function mincost(arr)
{ 
//write your code here
// return the min cost
   // Edge case for single rope (no cost to connect)
  if (arr.length === 1) return 0;
  
  // Import MinHeap functionality (priority queue) from JavaScript standard or libraries
  const heap = arr.slice();
  heap.sort((a, b) => a - b);  // Sort the array for heap initialization
  
  let totalCost = 0;
  
  while (heap.length > 1) {
    // Extract two smallest elements
    const first = heap.shift();  // Remove the first (smallest) element
    const second = heap.shift(); // Remove the next smallest element
    
    // Cost to connect these two ropes
    const cost = first + second;
    totalCost += cost;
    
    // Insert the new rope back into the sorted list (heap)
    heap.push(cost);
    heap.sort((a, b) => a - b);  // Re-sort to maintain min-heap property
  }
  
  return totalCost;
}

module.exports=mincost;
