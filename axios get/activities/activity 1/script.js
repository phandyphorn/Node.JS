function afterSuccess(response) {
  // 1 - TODO log the data from the response
  let alldatas = response.data;
  console.log(alldatas)
  //    - male or female
  let gender = alldatas.gender
  console.log(gender);

  //    - the probalility
  let probablility = alldatas.probability;
  console.log(probablility)
}
axios.get("https://api.genderize.io?name=ronan").then(afterSuccess);
