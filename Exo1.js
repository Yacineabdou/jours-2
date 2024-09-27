/*********************chanllenge: Exercices jours 2******************/
/*-----------------Exo:1--------------------*/

//-------------challenge 1
let challenge = "30 jours de JavaScript"

//-------------challenge 2
console.log(challenge);

//-------------challenge 3
console.log(challenge.length);

//-------------challenge 4
console.log(challenge.toUpperCase());

//--------------challenge 5
console.log(challenge.toLocaleLowerCase());

//--------------challenge 6
console.log(challenge.substring(0,2));

//---------------challenge 7
console.log(challenge.slice(0,2));

//----------------challenge 8
console.log(challenge.includes('Script'));

//----------------challenge 9
console.log(challenge.split(''));

//-----------------challenge 10
console.log(challenge.split(' '));

//challenge 11
let divisionDeChaine = " Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(divisionDeChaine.split(' '));

//-----------------challenge 12
console.log(challenge.replace('JavaScript', 'Python'));

//---------------challenge 13
console.log(challenge.charAt(15));

//----------------challenge 14
console.log(challenge.charCodeAt('j'));

//----------------challenge 15
console.log(challenge.indexOf("a"));

//----------------challenge 16
console.log(challenge.lastIndexOf("a"));

//----------------challenge 17
let challenge1 = "Vous ne pouvez pas terminer une phrase par because parce que parce que c'est une conjonction"
console.log(challenge1.indexOf("because"));

//-----------------challenge 18
let challenge2 = "Vous ne pouvez pas terminer une phrase par because because because est une conjonction"
console.log(challenge2.lastIndexOf("because"));

//-----------------challenge 19
let challenge3 = "Vous ne pouvez pas terminer une phrase par parce que parce que parce que est une conjonction"
console.log(challenge3.search("parce que"));

//-----------------challenge 20
console.log(challenge.trim(''));

//-----------------challenge 21
console.log(challenge.startsWith("30"));

//------------------challenge 22
console.log(challenge.endsWith("JavaScript"));

//-----------------challenge 23
console.log(challenge.match("a"));

//-----------------challenge 24
let challenge4 = "30 jours de"
console.log(challenge4.concat(" JavaScript"));

//----fin------challenge 25
console.log(challenge.repeat(2));

