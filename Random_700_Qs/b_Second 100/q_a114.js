/*
Implement a bubble sort.
*/
function bubbleSort1(A) { // sorts the array in ascending order
    while (true) { // runs n times in the worst case: ex) [6,5,4,3,2,1]
        let swap = 0;
        for (let i = 0; i < A.length-1; i++) {
            if (A[i] > A[i+1]) {
                [A[i], A[i+1]] = [A[i+1], A[i]];
                swap++;
            }
        }
        if (swap == 0) break;
    }
    return A;
}
// console.log(bubbleSort1([4,1,9,2]));
// console.log(bubbleSort1([2,-1,3,5]));
// console.log(bubbleSort1([]));

/*
Test Cases:
[4,1,9,2] => [1,2,4,9]
[2,-1,3,5] => [-1,2,3,5]
[] => []

Time Complexity: O(n^2)
Space Complexity: O(1)
*/  

function bubbleSort2(A) { // sorts the array in descending order
    while (true) { // runs n times in the worst case: ex) [1,2,3,4]
        let swap = 0;
        for (let i = 0; i < A.length-1; i++) {
            if (A[i] < A[i+1]) {
                [A[i], A[i+1]] = [A[i+1], A[i]];
                swap++;
            }
        }
        if (swap === 0) break;
    }
    return A;
}
console.log(bubbleSort2([4,1,9,2]));
console.log(bubbleSort2([2,-1,3,5]));
console.log(bubbleSort2([]));

