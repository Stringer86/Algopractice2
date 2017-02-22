
//Given two arrays, find the similar values between both and return those
//similar values in an array. Do not have duplicate values in the return array
//Ex: findSimilar([1,2,false,[2,3],{foo:'bar'},[5,6],'hi'],[0,2,[5,6],true,'hi',2,1,{foo:'bar'},{bar:'foo'}])
// -> [1,2,{foo:'bar'},[5,6],'hi']

// To test
// npm test 16-find-similar/test.js

const findSimilar = function(arr1, arr2) {
  let output = arr1.filter((e) => {
    return arr2.indexOf(e) !== -1;
  });

  // let arr1Arrs = arr1.filter((e) => {
  //   return Array.isArray(e);
  // })
  //
  // let arr2Arrs = arr2.filter((e) => {
  //   return Array.isArray(e);
  // })
  //
  // let arr1Objs = arr1.filter((e) => {
  //  if (!Array.isArray(e) && (typeof e === 'object')) return e;
  // })
  //
  // let arr2Objs = arr2.filter((e) => {
  //  if (!Array.isArray(e) && (typeof e === 'object')) return e;
  // })


  return output;
}

module.exports = {
  findSimilar: findSimilar,
};
