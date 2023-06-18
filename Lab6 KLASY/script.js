class Prostokat {
    constructor(wysokosc, szerokosc, nazwa) {
      this.wysokosc = wysokosc;
      this.szerokosc = szerokosc;
      this.nazwa = nazwa;
    }
  
    obliczObwod() {
      return 2 * (this.wysokosc + this.szerokosc);
    }
  
    obliczPole() {
      return this.wysokosc * this.szerokosc;
    }
  
    static porownaj(prostokat1, prostokat2) {
      const pole1 = prostokat1.obliczPole();
      const pole2 = prostokat2.obliczPole();
  
      if (pole1 > pole2) {
        return prostokat1;
      } else if (pole1 < pole2) {
        return prostokat2;
      } else {
        return 'Oba prostokąty mają takie same pole.';
      }
    }
  }

  const prostokat1 = new Prostokat(5, 10, 'Prostokąt 1');
  const prostokat2 = new Prostokat(3, 7, 'Prostokąt 2');
  const prostokat3 = new Prostokat(4, 6, 'Prostokąt 3');
  
  // Obliczanie obwodu i pola
  console.log(`${prostokat1.nazwa} - obwód: ${prostokat1.obliczObwod()}, pole: ${prostokat1.obliczPole()}`);
  console.log(`${prostokat2.nazwa} - obwód: ${prostokat2.obliczObwod()}, pole: ${prostokat2.obliczPole()}`);
  console.log(`${prostokat3.nazwa} - obwód: ${prostokat3.obliczObwod()}, pole: ${prostokat3.obliczPole()}`);
  
  // Porównywanie
  const wiekszyProstokat = Prostokat.porownaj(prostokat1, prostokat2);
  console.log(`Prostokąt o większym polu: ${wiekszyProstokat.nazwa}`);



  //Zadanie 2

  //Analogicznie jak w zadaniu 1:
  class Trojkat {
    constructor(wysokosc, podstawa, nazwa) {
      this.wysokosc = wysokosc;
      this.podstawa = podstawa;
      this.nazwa = nazwa;
    }
  
    obliczPole() {
      return (this.podstawa * this.wysokosc) / 2;
    }
  
    static porownaj(trojkat1, trojkat2) {
      const pole1 = trojkat1.obliczPole();
      const pole2 = trojkat2.obliczPole();
  
      if (pole1 > pole2) {
        return trojkat1;
      } else if (pole1 < pole2) {
        return trojkat2;
      } else {
        return 'Oba trójkąty mają takie same pole.';
      }
    }
  }
  
  // Tworzenie obiektów klasy Trojkat
  const trojkat1 = new Trojkat(5, 10, 'Trójkąt 1');
  const trojkat2 = new Trojkat(3, 7, 'Trójkąt 2');
  const trojkat3 = new Trojkat(4, 6, 'Trójkąt 3');
  
  // Obliczanie pola 
  console.log(`${trojkat1.nazwa} - pole: ${trojkat1.obliczPole()}`);
  console.log(`${trojkat2.nazwa} - pole: ${trojkat2.obliczPole()}`);
  console.log(`${trojkat3.nazwa} - pole: ${trojkat3.obliczPole()}`);
  
  // Porównywanie trójkątów
  const wiekszyTrojkat = Trojkat.porownaj(trojkat1, trojkat2);
  console.log(`Trójkąt o większym polu: ${wiekszyTrojkat.nazwa}`);

  //Zadanie 3

  class Trapez {
    constructor(wysokosc, podstawa1, podstawa2, nazwa) {
      this.wysokosc = wysokosc;
      this.podstawa1 = podstawa1;
      this.podstawa2 = podstawa2;
      this.nazwa = nazwa;
    }
  
    obliczPole() {
      return ((this.podstawa1 + this.podstawa2) * this.wysokosc) / 2;
    }
  }
  
  const trapez1 = new Trapez(5, 10, 7, 'Trapez 1');
  const trapez2 = new Trapez(3, 6, 4, 'Trapez 2');
  const trapez3 = new Trapez(4, 8, 5, 'Trapez 3');
  
  // Obliczanie pola dla trapezów
  console.log(`${trapez1.nazwa} - pole: ${trapez1.obliczPole()}`);
  console.log(`${trapez2.nazwa} - pole: ${trapez2.obliczPole()}`);
  console.log(`${trapez3.nazwa} - pole: ${trapez3.obliczPole()}`);

  //Zadanie 4
  function znajdzNajwiekszaFigure(prostokat, trojkat, trapez) {
    const poleProstokata = prostokat1.obliczPole();
    const poleTrojkata = trojkat2.obliczPole();
    const poleTrapezu = trapez3.obliczPole();
  
    let najwiekszePole = poleProstokata;
    let najwiekszaFigura = prostokat.nazwa;
  
    if (poleTrojkata > najwiekszePole) {
      najwiekszePole = poleTrojkata;
      najwiekszaFigura = trojkat.nazwa;
    }
  
    if (poleTrapezu > najwiekszePole) {
      najwiekszePole = poleTrapezu;
      najwiekszaFigura = trapez.nazwa;
    }
  
    console.log(`Największa figura: ${najwiekszaFigura}`);
    console.log(`Pole: ${najwiekszePole}`);
}

znajdzNajwiekszaFigure(prostokat1,trojkat1,trapez1)


//Zadanie 5

function porownajObwody(prostokat1, prostokat2) {
    const obwod1 = prostokat1.obliczObwod();
    const obwod2 = prostokat2.obliczObwod();
  
    if (obwod1 > obwod2) {
      return prostokat1;
    } else if (obwod1 < obwod2) {
      return prostokat2;
    } else {
      return null;
    }
  }

const prostokatZwiekszymObwodem = porownajObwody(prostokat1, prostokat2);

if (prostokatZwiekszymObwodem) {
  console.log(`Prostokąt o większym obwodzie: ${prostokatZwiekszymObwodem.nazwa}`);
} else {
  console.log('Oba prostokąty mają takie same obwody.');
}

//zadanie 6
// class Prostokat {
//     constructor(wysokosc, szerokosc, nazwa) {
//       this.wysokosc = wysokosc;
//       this.szerokosc = szerokosc;
//       this.nazwa = nazwa;
//     }
  
//     zmienNazwe(nowaNazwa) {
//       this.nazwa = nowaNazwa;
//     }
  
//     obliczObwod() {
//       return 2 * (this.wysokosc + this.szerokosc);
//     }
  
//     obliczPole() {
//       return this.wysokosc * this.szerokosc;
//     }
//   }
  
//   // Tworzenie obiektu prostokąta
//   const prostokat = new Prostokat(5, 10, 'Stary Prostokąt');
  
//   console.log(`Nazwa przed zmianą: ${prostokat.nazwa}`);
  
//   prostokat.zmienNazwe('Nowy Prostokąt');
  
//   console.log(`Nazwa po zmianie: ${prostokat.nazwa}`);

//Zadanie 6+ - tablice

let tablicaLiczb = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// zsumuj wartości
const suma = tablicaLiczb.reduce((a, b) => a + b, 0);
console.log("Suma wartości: " + suma);

// znajdź liczby parzyste
const liczbyParzyste = tablicaLiczb.filter(num => num % 2 === 0);
console.log("Liczby parzyste: " + liczbyParzyste);

// pomnóż wartości razy 3
const pomnozoneWartosci = tablicaLiczb.map(num => num * 3);
console.log("Pomnożone wartości: " + pomnozoneWartosci);

// dodaj do tablicy 67241. Znajdź index tej liczby w tablicy
tablicaLiczb.push(67241);
const index = tablicaLiczb.indexOf(67241);
console.log("Index liczby 67241: " + index);

// oblicz średnią arytmetyczną
const srednia = suma / tablicaLiczb.length;
console.log("Średnia arytmetyczna: " + srednia);

// znajdź największą liczbę
const najwiekszaLiczba = Math.max(...tablicaLiczb);
console.log("Największa liczba: " + najwiekszaLiczba);

// zlicz ilość wystąpień wybranej wartości
const wybranaWartosc = 3;
const iloscWystapien = tablicaLiczb.filter(num => num === wybranaWartosc).length;
console.log("Ilość wystąpień wartości " + wybranaWartosc + ": " + iloscWystapien);