import React from 'react';          // impor React library
import ReactDOM from 'react-dom';   // impor React library yang berhubungan dengan DOM

/*
    React Component

    Deklarasi kelas komponen (MyComponent) dengan menurunkan
    dari class Component (React.Component) yang berasal dari library React.

    Nama kelas komponen UpperCamelCase.

    Harus terdapat fungsi render() menyatakan elemen JSX yang akan dirender.

    Render kelas komponen (MyComponent) menggunakan method render dari ReactDOM,
    dengan menyebutkan nama kelasnya (<MyComponent />).
*/
class MyComponent extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}

/*
    Multiline JSX

    Gunakan kurung buka-tutup ( ) untuk elemen JSX yang lebih dari 1 baris.
*/
class MultiLineQuote extends React.Component {
    render() {
        return (
            <blockquote>
                <p>
                    The world is full of objects, more or less interesting; I do not wish to add any more.
                </p>
                <cite>
                    <a target="_blank" href="http://bit.ly/1WGzM4G">
                        Douglas Huebler
                    </a>
                </cite>
            </blockquote>
        );
    }
}


/*
    Variabel Atribut dalam Component

    Gunakan { } untuk menyisipkan sintaks JavaScript ke dalam element JSX.
*/
const owl = {
    title: "Excellent Owl",
    src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg"
};

class VariableAttribute extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {owl.title}
                </h1>
                <img
                    src = {owl.src}
                    alt = {owl.title}
                />
            </div>
        );
    }
}


/*
    Logika dalam Fungsi Render

    Perhatikan! : Letakkan logika di DALAM fungsi.
*/
class Random extends React.Component {
    render() {
        const n = Math.floor(Math.random()*10+1);

        return <h1>The number is {n}!</h1>;
    }
}


/*
    Statemen Kondisional dalam Fungsi Render

    Letakkan statemen kondisional di DALAM fungsi, SEBELUM statemen return.
*/
class TodaysPlan extends React.Component {
    render() {
      let task;
      let apocalypse = false;

      if (!apocalypse) {
        task = 'learn React.js'
      } else {
        task = 'run around'
      }
  
      return <h1>Today I am going to {task}!</h1>;
    }
  }


  /*
    Event Listener dalam Component
  */
  class Scream extends React.Component {
    handleClick() {
      alert('AAAAAAAAHHH!!!!!');
    }
  
    render() {
      return <button onClick={this.handleClick}>AAAAAH!</button>;
    }
  }







/*
    Render JSX to Screen

    Parameter 1 => JSX yang akan ditampilkan/dirender
    Parameter 2 => tempat dimana JSX akan dirender
*/
ReactDOM.render(
    <Scream />,
    document.getElementById('root')
);