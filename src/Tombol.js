import React from 'react';

export class Btn extends React.Component {
    render() {
        return <button onClick={this.props.onClick}>Click Me!</button>
    }
}