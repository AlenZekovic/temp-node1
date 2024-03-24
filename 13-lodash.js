const _=require('lodash')
const items=[1,[2],[3,[4]]]
const newItems=_.flattenDeep(items)
console.log(items)
console.log(newItems)
function ff(arr){
   const ss= arr.flat()
    return ss
}
const item1=ff(items)
console.log(item1)
