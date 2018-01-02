import React from 'react';

export class Child extends React.Component {


    render() {
        return <h1>Hello, My name is { this.props.name }</h1>;
    }
}