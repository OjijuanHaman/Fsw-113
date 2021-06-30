let count = new Function("grades", "...grades.length")

var result = count([ 90, 80 , 88, 98])

console.log(result)

/*
1 : [ NaN, NaN, NaN, NaN ]
2 : [ 99.00000000000001, 88, 96.80000000000001, 107.80000000000001 ]
3 : [ 119.7, 106.4, 117.04, 130.34 ]
    error
4 : error
5 : error
6 : error
7 : error
    [ 80.1, 71.2, 78.32000000000001, 87.22 ]
8 : [ 117, 104, 114.4, 127.4 ]
9 : [ 88.4, 72.8, 117, 104, 114.4, 127.4 ]
    error
*/