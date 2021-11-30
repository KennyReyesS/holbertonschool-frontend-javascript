function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    if (resolve) {
      return true;
    } else {
      return false;
    }
  })
}
export default getResponseFromAPI;