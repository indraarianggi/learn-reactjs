import React from 'react';
import ReactDOM from 'react-dom';

/*
    Props
    
    Props adalah sebuah objek yang menangani informasi sebuah komponen.

    Props disisipkan dalam komponen seperti menyisipkan ATRIBUT pada html.

    Jika nilai yang props yang disisipkan bukan string, harus menggunakan tanda { }

    Nilai sebuah props diakses dengan cara: this.props.NAMA-PROPS-TUJUAN
    Lebih jelas lihat Profile.js dan Tombol.js

    this.props.children =>> mengembalikan semua diantara 
    tag pembuka dan penutup sebuah komponen
    (perhatikan komponen List, List.js).

    defaultProps    => props default yg akan digunakan 
    jika props yang dimaksud tidak disisipkan dalam komponen.
    (perhatikan komponen Profile, props job).
*/
import { Profile } from './Profile';
import { Btn } from './Tombol';
import { List } from './List';

class Hello extends React.Component {
    handleClick() {
        alert('Hello there, I am still learn ReactJs. This Awesome!');
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Profile name='Indra Arianggi' age={21} single={false} />

                <Btn onClick={this.handleClick}/>

                <p>I wanna become:</p>
                <List>
                    <li>Web Programmer</li>
                    <li>Android Mobile Programmer</li>
                    <li>UI/UX Designer</li>
                </List>
            </div>
        );
    }
}







/*
    Render JSX to Screen

    Parameter 1 => JSX yang akan ditampilkan/dirender
    Parameter 2 => tempat dimana JSX akan dirender
*/
ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);