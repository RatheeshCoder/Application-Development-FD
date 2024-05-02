//Sum of elements in an array

var arr1 = [1, 2, 3, 4, 5] ;

let len1 = arr1.length;

let sum = 0;

for(let i = 0; i < len1; i++){
    sum += arr1[i];
}
console.log("Sum of elements in an array",sum);

//==== ========================
//Print unique values from an array

var arr2 = [1, 2, 3, 3, 4, 5, 5]
let len2 = arr2.length;

let unique = [];
for (let i=0; i<len2; i++){
    if(unique.indexOf(arr2[i]) === -1){
        unique.push(arr2[i]);
    }
}

console.log( "Print unique values from an array", unique);


//==== ========================

// Concat two arrays

var arr3 = [1, 2, 3] 
var arr4 = [4, 5]

let len3 = arr3.length;
let len4 = arr4.length;

let arr5 = [];
for(let i=0; i<len3; i++){
    arr5.push(arr3[i]);
}

for(let i=0; i<len4; i++){
    arr5.push(arr4[i]);
}

console.log("Concat two arrays",arr5);

//==== ========================

// Intersection of two arrays

var arr6 = [1, 2,3,4]
var arr7 = [3,4,5,6]

let len6 = arr6.length;
let len7 = arr7.length;

let intersection = [];
for(let i=0; i<len6; i++){
    for(let j=0; j<len7; j++){
        if(arr6[i] === arr7[j]){
            intersection.push(arr6[i]);
        }
    }
}

console.log("Intersection of two arrays",intersection);

//==== ========================

//Check given string is palindrome or not

var str = "madam";
let len = str.length;
let isPalindrome = true;

for(let i=0; i<len/2; i++){
    if(str[i] !== str[len-1-i]){
        isPalindrome = false;
        break;
    }
}
console.log("Is Palindrome? ", isPalindrome);
