const user = {
    id: 1,
    name: 'gorib amir',
    job: 'actor',
}
// JavaScript Object Notation (JSON)
console.log(user);
const userJSON = JSON.stringify(user);
console.log("JSON.stringify: ", userJSON);
const userOBJ = JSON.parse(userJSON);
console.log("JSON.parse: ", userOBJ);