let reLive = "parent";
let newInfo = "child";
let array = ["Call us now...", "We will give you the exprience of a lifetime...", "A trial will convince you...","We are here for you now..."];

Array.prototype.random = function (length) {
  return this[Math.floor((Math.random() * length))];
}
function pickRandom(){
  let pickRandom = array.random(array.length)
   return(pickRandom);

}
document.getElementById("parent");
document.getElementById("child").innerHTML = pickRandom();


