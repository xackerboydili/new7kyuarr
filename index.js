'1'

// function spacify(str) {
//     return str.split("").join(" ")
//  }

'2'
// function gimme (triplet) {
//     return triplet.indexOf(([...triplet].sort((a, b) => a - b)[1]))
// }
'3'

// const sort = (array) =>array.map((e, index)=> [e * (index + 1), e]).sort((a, b)=> a[0] - b[0]).map(e => e[1])

'4'

// function alternate(n, firstValue, secondValue){
//     let result = []
//     for(let i = 0; i < n; i ++){
//         if(!(i % 2)){
//             result.push(firstValue)
//         }
//         else{
//             result.push(secondValue)
//         }
//     }
//     return result
// }

'5'

// function evenNumbers(array, number) {
//     return array.filter(e => !(e % 2)).splice(-number)
// }

'6'

// function maxDiff(list) {
//     if(list.length <= 1){
//         return 0
//     }
//     const sorted = list.sort((a,b)=> a-b)
//     return list[list.length -1 ] - list[0]
// };

'7'

// var rotateMatrix = arr => {
//     let reverse = arr[0].map((_, i) => arr.map(e => e[i]))
//     let result = reverse.reverse()
  
// }
'8'

// function getCount(str) {
//     return str.split('').filter(e => 'aeiouAEIOU'.includes(e)).length
// }

'9'

// var isSquare = function(n){
//    return Math.sqrt(n)%1==0
// }

'10'

// function isIsogram(str){
//     return new Set(str.toLowerCase()).size == str.length
// }

'11'
// var isAnagram = function(test, original) {
//     return [...test.toLowerCase()].sort().join() == [...original.toLowerCase()].sort().join()
// };

'12'

// function filter_list(l) {
//     return l.filter(e => {
//         if(typeof e === 'number' || e === 0){
//             return true
//         }
//     })
// }