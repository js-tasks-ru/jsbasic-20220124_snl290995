
let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
   return str
   .split(' ')
   .map ( item => {
   let max = Math.max.apply(null, item)
   let min = Math.min.apply(null, item)
   return {max, min}
   })
   .join('\n')
}

console.log(getMinMax(inputData));