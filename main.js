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
Return the sum of l0 the numbers from 0 to the given numbers are divisible by 3 and or 5

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