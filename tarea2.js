

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

function solutionf(A, B, K) {
    return Math.floor(B/K) - Math.floor((A - 1)/K);
}

console.log(solutionf(6, 11, 2))
console.log(solutionf(11, 13, 2)) 
console.log(solutionf(11, 14, 2)) 

function solutiong(S,P,Q) {
        len = S.length;
        arr = new Array(len);
        result = new Array(P.length);
        
        for (var i = 0; i < arr.length; i++) {
            arr[i] = new Array(4);
            for (var j = 0; j < arr.length; j++) {
                arr[i][j] = 0;
            }
        }
        
        for(var i = 0; i < len; i++){
          c = S.charAt(i);
          if(c == 'A') arr[i][0] = 1;
          if(c == 'C') arr[i][1] = 1;
          if(c == 'G') arr[i][2] = 1;
          if(c == 'T') arr[i][3] = 1;
        }
        
        for( i = 1; i < len; i++){
          for( j = 0; j < 4; j++){
            arr[i][j] += arr[i-1][j];
          }
        }	
        for(i = 0; i < P.length; i++){
          x = P[i];
          y = Q[i];
          
          for( a = 0; a < 4; a++){
            sub = 0;
            if(x-1 >= 0) sub = arr[x-1][a];
            if(arr[y][a] - sub > 0){
              result[i] = a+1;
              break;
            }
          }
          
        }
        return result;
      }

console.log ( solutiong('CAGCCTA', [2, 5, 0], [4, 5, 6]))