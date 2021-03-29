// This is a demo task.

// Write a function:

// class Solution { public int solution(int[] A); }

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
function solution(A) {
    searchNumber  = 1
    A.sort(function(a, b) {
        return a - b;
      });
    for (a = 0; a <= A.length; a++) {
            console.log(a+'=>'+searchNumber +' => '+A[a]);
            if(searchNumber === A[a]){
                searchNumber++;
            }
    }
    return searchNumber
      
}
console.log(solution([1, 2, 3,4,5,6,7,8,9,10,12,13,14]))