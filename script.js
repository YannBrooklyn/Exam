// EXO1
function exo1(exo1b){
let A = 12 

let B = 2 

let C = A * B 

console.log(C);
return exo1b
}
exo1()

// EXO2

function exo2(exo2b){
    
    let A = "123" 

    let B = "12"

    let C = A + B 
     
    
    console.log(C);
    return exo2b 

}
exo2()

// EXO3

function exo3(exo3b){

    let exo = parseInt(prompt("prix de cette objet ?", ""))* 1.196; 
    console.log(exo);
    return exo3b;
    
}
exo3()

// EXO4

function exo4(exo4b){
    let FirstName = prompt("Bonjour quel est ton prénom ?"); 

let LastName = prompt("Bonjour quel est ton nom de famille ?"); 

console.log("Bonjour votre prénom est " + FirstName + " et votre nom de famille est " + LastName); 
return exo4b
}

exo4()

// EXO5

function exo5(exo5b){

    let firstnumber = parseInt(prompt("ton premier nombre ?")); 

let secondnumber = parseInt(prompt("ton deuxieme nombre ?")); 

finalnumber = firstnumber * secondnumber; 

 

if (finalnumber < 0) { 
     console.log("c\'est négatif " + finalnumber); 

} 

else { 

console.log("c\'est positif " + finalnumber); 

} 
    return exo5b
    
}
exo5()

// EXO6

function exo6(exo6b){

    let AgeUser = parseInt(prompt("Quel est ton age ?")); 

 

if (AgeUser <= 13) { 

 console.log("Les films disponible pour votre age sont \"Action Man\" et \"Matrix\".") 

} 

 

else if (AgeUser >= 13 && AgeUser <= 18) {   console.log("Les films disponible pour votre age sont \"Evil Dead\" et \"Matrix\".") 

} 

 

else {   console.log("Les films disponible pour votre age sont \"Evil Dead\".") 

} 
return exo6b   
}
exo6()

// EXO7

function exo7(exo7b){
    let Plage = Math.round(Math.random()*10); 

console.log(Plage); 
return exo7b
    
}
exo7()

// EXO8

function exo8(exo8b){
    let numberuser = parseInt(prompt("Donne un nombre")); 

 

while (numberuser > 0) { 

 numberuser--; 

 console.log(numberuser); 

} 
return exo8b;
}
exo8()

// EXO9

function exo9(exo9b) { 

     let enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?")); 
         let searchedNumber = 14; 

         while (enteredNumber !== searchedNumber) { 
           if (enteredNumber < searchedNumber) { 
         enteredNumber = parseInt(prompt("C\'est plus")); 
           } 
           else if (enteredNumber > searchedNumber) { 
         enteredNumber = parseInt(prompt('C\'est moins')); 
           } 
           else { 
         console.log("Ah sa abandonne ?"); 
         break; 
           } 
         } 
         if (enteredNumber) { 
           console.log("you win"); 
         } 
    return exo9b
    }
exo9()


// EXO10

function exo10(exo10b) {
    let chiffres = [10, 15, 20, 15, 14, 8]; 

    let sum = 0;  
  for (let i = 0; i < chiffres.length; i++) { 

   sum = sum + chiffres [i]; 

   }

  console.log("La somme des valeurs du tableau est " + sum) 
return exo10b
} 
exo10()

// EXO11

function exo11(exo11b){
    let eleves = parseInt(prompt("Nombre d'eleves ?")); 
    let moyenne = 0; 
    let notes = []; 

    for (let i = eleves; i > 0; i--) { 
        let note = parseInt(prompt("Note de l\'eleve")); 
        notes.push(note); 
    } 

    console.log("Voici les notes des " + eleves + " élèves: " + notes); 

    for (let a = 0; a < notes.length; a++) { 
        moyenne = moyenne + notes[a]; 
    }

    console.log("Voici la sommes des notes des " + eleves + " élèves: " + moyenne); 
    moyenne = moyenne / eleves;
    console.log("Voici la moyenne des notes des " + eleves + " élèves: " + moyenne);
    return exo11b;
}

exo11()


// EXO12
function exo12(exo12b){
    let eleves = parseInt(prompt("Nombre d'eleves ?")); 
    let moyenne = 0; 
    let notes = []; 
    let upper = [];

    for (let i = eleves; i > 0; i--) { 
        let note = parseInt(prompt("Note de l\'eleve")); 
        notes.push(note); 
    } 

    console.log("Voici les notes des " + eleves + " élèves: " + notes); 

    for (let i = 0; i < notes.length; i++) { 
        moyenne = moyenne + notes[i]; 
    }

    console.log("Voici la sommes des notes des " + eleves + " élèves: " + moyenne); 

    moyenne = moyenne / eleves;

    console.log("Voici la moyenne des notes des " + eleves + " élèves: " + moyenne);

    for (let a = 0; a < notes.length; a++) {
        if (notes[a] > moyenne) {
        upper.push(notes[a]);
        }
    }
    console.log("Il y a " + upper.length + " notes au dessus de la moyenne " + upper);

    return exo12b;

}

exo12()

// EXO 13
function exo13(exo13b) {
let nbres = [[0, 18], [1, 45], [45, 48], [-3, 2]];

console.log(nbres);
for (let i = 0; i < nbres.length; i++) {
    let result = nbres[0][0] + nbres[0][1];
    nbres.push(result);
    console.log(nbres);
    
}

console.log(nbres);
return exo13b;
}

exo13()