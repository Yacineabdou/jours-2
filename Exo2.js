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