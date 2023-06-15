
// // Zadanie 1
var a=20;
var b=10;
let add=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
let mod=a%b;
console.log("add");
console.log("sub");
console.log("mul");
console.log("div");
console.log("mod");
document.getElementById("add").innerHTML;

//  Zadanie 2
// Losowanie liczby całkowitej między 1 a 10
var randomNumber = Math.ceil(Math.random() * 10);

// Pobranie liczby od użytkownika
var userGuess = parseInt(prompt("Zgadnij liczbę między 1 a 10:"));

// Sprawdzenie zgadnięcia użytkownika
if (userGuess === randomNumber) {
    console.log("Dobra robota! Zgadłeś liczbę!");
} else {
    console.log("Niestety, to nie jest poprawna liczba. Wylosowana liczba to: " + randomNumber);
}