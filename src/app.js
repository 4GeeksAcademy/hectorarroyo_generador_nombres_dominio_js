import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

let pronoun = ['un','el'];
let adj = ['buen', 'excelente', 'hermoso', 'bonito'];
let noun = ['comienzo', 'final', 'camino', 'tropiezo'];
let ext = [ '.com', '.net', '.us', '.io'];

for (let i = 0; i < pronoun.length; i++) {
  let pronounDomain = pronoun[i]

  for (let j = 0; j < adj.length; j++) {
    let adjDomain = adj[j]

    for (let n = 0; n < noun.length; n++) {
      let nounDomain = noun[n]

      for (let e = 0; e < ext.length; e++) {
        let extDomain = ext[e]

           let nombreDeDominio = pronounDomain+adjDomain+nounDomain+extDomain
            console.log(nombreDeDominio);
    
      }
    }
  } 
}
  
};
