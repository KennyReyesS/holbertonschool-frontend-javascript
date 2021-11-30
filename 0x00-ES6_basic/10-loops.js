export default function appendToEachArrayValue(array, appendvalueing) {
  let arr = [];
  let value = '';
  
  for (const idx of array) {
    value = appendvalueing + idx;
    arr.push(value)
    array = arr
  }

  return array;
}
