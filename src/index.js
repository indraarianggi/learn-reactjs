import React from 'react';
import ReactDOM from 'react-dom';

/*
    JSX elemen diinisialisasi kedalam sebuah variabel

    Setiap elemen JSX harus memiliki tag penutup (closing tag).
    Bahkan untuk elemen yang hanya membutuhkan satu tag,
    contoh: <img . . . . /> ataupun <br/>
*/
const title = <h1>Hello, I am learn ReactJs</h1>;


/*
    JSX elemen dengan atribut => sama seperti pada HTML
*/
const title2 = <h1 id='title'>Hello, I am learn ReactJs</h1>;


/*
    Atribut class dalam elemen JSX

    Gunakan className untuk menyatakan class dalam elemen JSX
    Ini akan dirender sebagai class oleh React
*/
const title3 = <h1 className='title'>How to add class attribute to JSX element</h1>;


/*
    Nested JSX elemen (lebih dari satu baris)

    Menggunakan tanda kurung-buka-tutup,
    Hanya ada satu elemen terluar
*/
const list = (
    <ul>
        <li>Pizza</li>
        <li>Kebab</li>
        <li>Spageti</li>
    </ul>
);


/*
    JSX elemen dalam objek
    
    Akses dengan cara: obj.namadepan
*/
const obj = {
    namadepan       : <h1>Indra</h1>,
    namabelakang    : <h1>Arianggi</h1>
};


/*
    JavaScript dalam elemen JSX

    Gunakan { } untuk mengapit sintaks JavaScript dalam elemen JSX
*/
// Contoh 1
const operasi = <h1>Hasil 2 + 3 adalah { 2 + 3 }</h1>

// Contoh 2
let nama = 'Indra Arianggi';
const salam = <h1>Hallo, nama saya { nama }. Salam kenal</h1>

// Contoh 3
const pi = (
    <div>
        <h1>
            PI, YALL!
        </h1>
        <p>
            { Math.PI.toFixed(20) }
        </p>
    </div>
);


/*
    Varibel untuk atribut dalam JSX
*/
const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';
var gooseImg = <img src = { goose }/>;


/*
*   Event handler
*/
function handleClick() {
    alert('I was clicked');
}

const btn = <button onClick={handleClick}>Click Me!</button>


/*
*   If Statemen di JSX
*
*   Dalam elemen JSK tidak bisa disisipkan statemen if
*   misal, sintaks berikut salah:
*
*   const ifState = <h1>Grade : { if (nilai>80)?'A':'B' }</h1>
*
*
*   Untuk mensiasatinya, letakkan statemne if di luar elemen JSX
*   sebagai berikut:
*/
let message;
const grade = 'A'

if (grade == 'A') {
  message = (
    <h1>
      Wow, you are so smart!
    </h1>
  );
} else {
  message = (
    <h1>
      Maybe next time bro
    </h1>
  );
}

//  Solusi lain menggunakan Ternary Operator
const message2 = <h1>{ (grade=='A')?'Wow, you are so smart!':'Maybe next time bro' }</h1>


/*
*   .map di JSX
*
*   Digunakan untuk membuat list elemen-elemen JSX
*   list dalam JSX seharusnya memiliki key dengan nilai yang unik
*/
const people = ['Rowe', 'Prevost', 'Gare', 'Gare'];

const peopleLis = people.map((person, i) =>
  <li key={'person_' + i}>{person}</li>
);


/*
*   React.createElement
*
*   menulis kode React tanpa menggunakan JSX
*/
const h1 = React.createElement(
    "h1",
    null,
    "Hello, world"
  );







/*
    Render JSX to Screen

    Parameter 1 => JSX yang akan ditampilkan/dirender
    Parameter 2 => tempat dimana JSX akan dirender
*/
ReactDOM.render(
    h1,
    document.getElementById('root')
);