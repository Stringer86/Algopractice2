
//Given two arrays, find the similar values between both and return those
//similar values in an array. Do not have duplicate values in the return array
//Ex: findSimilar([1,2,false,[2,3],{foo:'bar'},[5,6],'hi'],[0,2,[5,6],true,'hi',2,1,{foo:'bar'},{bar:'foo'}])
// -> [1,2,{foo:'bar'},[5,6],'hi']

// To test
// npm test 16-find-similar/test.js

const findSimilar = function(arr1, arr2) {
  const arr1Obj  = arr1.reduce((acc, ele) => {
    acc[JSON.stringify(ele)] = 1;
    return acc;
  },{});

  const arr2Obj  = arr2.reduce((acc, ele) => {
    acc[JSON.stringify(ele)] = 1;
    return acc;
  },{});

  const result = []
  for(const e in arr2Obj){
    if(arr1Obj.hasOwnProperty(e)){
      result.push(JSON.parse(e));
    }
  }

  return result;

}

module.exports = {
  findSimilar: findSimilar,
};
