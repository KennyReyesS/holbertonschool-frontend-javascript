export default function concatArrays(array1, array2, string) {
  const char = Array.from(string)
  return array1.concat(array2, char)
}
