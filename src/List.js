import React from 'react';

export class List extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    { this.props.children }
                </ul>
            </div>
        );
    }
}