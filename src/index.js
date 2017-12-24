import React from 'react';
import ReactDOM from 'react-dom';

/*
    Components Render Other Components

    Import File/Component yang akan dirender (Profile.js)

    Deklarasi File/Component yang akan dirender
    dimulai dengan keyword EXPORT (lihat Profile.js).

    Di File/Component yang akan dirender tidak memerlukan ReactDOM.render();
    (tidak perlu dirender).
    Karena perenderan dilakukan di File/Component pemannggil (index.js)
*/
import { Profile } from './Profile';

class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <Profile />
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