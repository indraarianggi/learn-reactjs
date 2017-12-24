import React from 'react';

export class Profile extends React.Component {
    render() {
        let status = '';
        if (this.props.single) {
            status = <b>Single</b>;
        } else {
            status = <b>have a cute girl ;)</b>;
        }

        return (
            <p>
                My name <b>{ this.props.name }</b>, 
                I am <b>{ this.props.job }</b>, 
                <b> { this.props.age } </b> years old, 
                and { status }.
            </p>
        );
    }
}

// defaultProps, diakses jika tidak ada props yang disisipkan dalam komponen.
Profile.defaultProps = {
    name    : 'Indra',
    job     : 'Programmer',
    age     : 21,
    single  : false
}