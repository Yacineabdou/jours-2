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


/*------------------Exo:2-----------------------*/

//-----------------challenge 1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

//------------------challenge 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

//-----------------challenge 3
console.log(parseInt('10'));

//------------------challenge 4
console.log(Math.round('9.8'));

//------------------challenge 5
let monV = 'Python'
console.log(monV.includes('on'));
let mnv = 'jargon'
console.log(mnv.includes('on'));

//-----------------challenge 6
let laPhrase = "J'espère que ce cours n'est pas plein de jargon"
console.log(laPhrase.includes("jargon"));

//-----------------challenge 7
console.log(Math.floor(Math.random() * 101));

//-----------------challenge 8
let monVa = Math.floor(Math.random() * 101)
if (monVa<50){
    monVa += 50     
}
console.log(monVa);
//------------------challenge 9
console.log(Math.floor(Math.random() * 256));

//------------------challenge 10

let maChaine = "JavaScript"
console.log(maChaine.split(''));

//-----------------challenge 11
console.log(`
1 1 1 1 1\n
2 1 2 4 8\n
3 1 3 9 27\n
4 1 4 16 64\n
5 1 5 25 125\n
`);

//--------------------challenge 12
let monSubstr = "Vous ne pouvez pas terminer une phrase par parce que parce que parce que est une conjonction"
console.log(monSubstr.substr(42, 30));

/*---------------------Exo:3---------------------------*/
//------------------challenge 1
let amour = " L'amour est la meilleure chose au monde. Certains ont trouvé l'amour et d'autres le cherchent encore"
console.log(amour.match("amour"));

//------------------challenge 2
let imposible = "Vous ne pouvez pas terminer une phrase par parce que parce que parce que est une conjonction"
console.log(imposible.match("parce que"));

let sentence1
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
if(sentence === sentence){
    console.log(sentence1 = "I am a teacher, and I love teaching. There is nothing; as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. does this motivate you to be a teacher! this 30DaysOfJavaScript is also the result of love of teaching");
}

//------------------challenge 4
let salaireGagnerPArMOI = 5000
let bonnusAnnuel = 10000
let coursEnLigneParMoi = 15000
let revenuAnnuelTotal  
console.log(revenuAnnuelTotal = salaireGagnerPArMOI + bonnusAnnuel + coursEnLigneParMoi);