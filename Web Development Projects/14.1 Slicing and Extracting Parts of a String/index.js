//Aufgabe 1
var tweet = prompt("Tippe deinen Twitter Text ein:");
alert("Du hast " + tweet.length + " Ziffern eingegeben. Es bleiben noch " + (140-tweet.length) + " Ziffern übrig.");


//Aufgabe 2
var tweet = prompt("Tippe deinen Twitter Text ein:");
alert("Du hast " + tweet.length + " Ziffern eingegeben. Es bleiben noch " + (140-tweet.length) + " Ziffern übrig.");
var tweetUnder140 = tweet.slice(0,140);
alert("Das ist dein Tweet: " + (tweetUnder140));

//Aufgabe 3
var input = prompt("Tippe deinen Text ein:");
alert(input.toUpperCase(prompt));

//Aufgaben 4
var input = prompt("Wie heißt du?: ");
var name = (input.toLowerCase(input));
ersterBuchstabe = (name.slice(0,1));
name = (name.slice(1,name.length));
ersterBuchstabe = ersterBuchstabe.toUpperCase(ersterBuchstabe);
alert((ersterBuchstabe) + (name));
