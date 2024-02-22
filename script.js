console.log("hiiee!!");
console.log(20*62);
console.log("Konichiva", "Anneangsehyo");
console.log(30*35, 20*51);
//- For Comment
console.log(typeof true);
console.log(typeof false);
console.log(typeof 123);
console.log(typeof "friends");
console.log(typeof "a")
let abc =20;
let asd ="friends";
console.log(abc,asd);
let x = y = 25-10-5;
console.log(x,y);
let z = 25- 10*5-1;
console.log(z);
let CurYear = 2024;
let birthYear = 2002;

// + - concatination
let msg1 = "Muskan is " + (CurYear-birthYear) + " years old";
console.log(msg1);

// `` - String Template Literals
let msg2=  `Muskan is ${CurYear-birthYear}  years old`;
console.log(msg2);

console.log(`You can
put the statement
in more than 
one line.`);

// Type Conversion and Type Coercion
// Type Conversation
let aYear = "2024";
console.log("In 10 years from now, it will be+ CurYear+10");   //bcz aYearis string, so if we put + with any strin it wll make the others the same as the content given before. 
console.log(aYear+10);
console.log("In 10 years from now, it will be + Number(CurYear)+10");
console.log(Number(aYear)+10);    // as here we give aYear Number property so it act accoringly.
console.log(Number("random"));
console.log(typeof Nan);   // NaN- Not A Number 
console.log(String(23),25);

//Type Coercion
console.log('23'-'10'-3);  // "-" dosent care if the content is the same or not if there is a no. it will subtract it.
console.log('23'+'10'+3);
console.log('25'*'2');
console.log('46'/'4');
console.log('45'>'10');
console.log(2+3+4+'5');

//Truthy and Falsy Value
// 0, '', Undefined, Null, NaN
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN)); 