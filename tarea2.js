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
            if(searchNumber === A[a]){
                searchNumber++;
            }
    }
    return searchNumber
      
}
console.log(solution([1, 2, 3,4,5,6,7,8,9,10,12,13,14]))

// A non-empty array A consisting of N integers is given.

// A permutation is a sequence containing each element from 1 to N once, and only once.

// For example, array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// is a permutation, but array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// is not a permutation, because value 2 is missing.

// The goal is to check whether array A is a permutation.

// Write a function:

// class Solution { public int solution(int[] A); }

// that, given an array A, returns 1 if array A is a permutation and 0 if it is not.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
//     A[3] = 2
// the function should return 1.

// Given array A such that:

//     A[0] = 4
//     A[1] = 1
//     A[2] = 3
// the function should return 0.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [1..1,000,000,000].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

function solutione(A) {
    A.sort(function(a, b) {
        return a - b;
      });
    searchNumber  = 1
    for (a = 0; a < A.length; a++) {
            if(searchNumber === A[a]){
                searchNumber++;
            }else{
                return false
            }
    }
    return true
}
console.log(solutione([1,2,4,5,3]))