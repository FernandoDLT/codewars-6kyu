// function solution(number){
//   if(number <= 0) return 0;
//   for(let i = )
// }
/* 
PREP
Parameters
One perameter 
Number can be negative

RETURNS:
Return the sum of 10 the numbers from 0 to the given numbers are divisible by 3 and or 5

EXAMPLES:
Solution (10) // return 23 3+5+6+9
Solution (-10) // return 0
Solution (20) // return 78 3+5+6+9+10+12+15+18
*/
function solution(number){
    let counter = 0
    for(let i = 3; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            counter += i
        }
    }
    return counter

}
console.log(solution(10));

function endResult(nums) {
    let counter = 0;
    for(let i = 3; i < nums; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            counter += i
        }
    }
    return counter
}
console.log(endResult(21));


function result(num) {
    let counter = 0
    for(let i = 3; i < num; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            counter += i
        }
    }
        return counter
}
console.log(result(20));
console.log(result(10));
console.log(result(16));


function total(numz) {
    let counter = 0;
    for(let i = 3; i < numz; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            counter += i
        }
    }
    return counter
}
console.log(total(20));
console.log(total(10));
console.log(total(16));
