import React from 'react';
import ReactDOM from 'react-dom';

/*
    Stateless Components Inherit From Stateful Components

    Stateless   => tidak memiliki state.
    Stateful    => memiliki state.

    A React component should use PROPS to store information 
    that can be changed, but can only be changed by a different component.

    A React component should use STATE to store information that the component itself can change.

*/
import { Child } from './child';

class Parent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name : 'Indra' };
    }

    render() {
        return <Child name={ this.state.name } />;
    }
}








/*
    Render JSX to Screen

    Parameter 1 => JSX yang akan ditampilkan/dirender
    Parameter 2 => tempat dimana JSX akan dirender
*/
ReactDOM.render(
    <Parent />,
    document.getElementById('root')
);