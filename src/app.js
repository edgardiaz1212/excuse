// /* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

const who = ['The dog','My grandma','My cat','Mario Bros'];
const action = ['ate','peed','crushed','broke', 'steal', 'picked'];
const what = ['my homework', 'the keys', 'the car', 'the laptop'];
const when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];


onload =  () => {
//write your code here
let result = who[Math.floor(Math.random()*who.length)]+' '+action[Math.floor(Math.random()*action.length)]+' '+what[Math.floor(Math.random()*what.length)]+' '+when[Math.floor(Math.random()*when.length)];
document.querySelector('#excuse').innerHTML= result
// return result
}    


