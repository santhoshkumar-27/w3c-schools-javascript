// console.clear();
let ar = ['smartWork',32, true];
let arLen = ar.length;
// console.log(arrLen);
let text = "<ul>";
for(let i= 0; i < arLen; i++){
   text += "<li>" + ar[i] + "</li>";
}
text += "</ul>";
console.log(text);
document.getElementById("demo3").innerHTML = text;