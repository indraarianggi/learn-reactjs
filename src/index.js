import React from 'react';
import ReactDOM from 'react-dom';

/*
    State

    Seperti props, digunakan untuk menangani informasi yg dinamis.

    Dinyatakan dalam sebuah PROPERTI STATE di dalam CONSTRUCTOR kelas.
    
    Berbeda dengan props, properti state TIDAK dilewatkan dari luar kelas komponen.
    Sebuah komponen menentukan sendiri state-nya.

    Nilai state diakses dengan cara: this.state.NAMA-PROPERTI-STATE.

    Nilai state diubah menggunakan fungsi: this.setState();
    Dimana this.setState() akan memanggil fungsi render() secara otomatis.
*/
const green = '#39D1B4';
const yellow = '#FFD712';

class BgColor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bgColor   : green,
            fontColor : yellow
        };

        this.changeBgColor = this.changeBgColor.bind(this);
    }

    changeBgColor() {
        const newColor = this.state.bgColor == green ? yellow : green;

        this.setState({ bgColor: newColor });
    }

    // Tidak perlu bind(this) di dalam constructor.
    changeFontColor = () => {
        const newColor = this.state.fontColor == green ? yellow : green;

        this.setState({ fontColor: newColor });
    }

    render() {    
        return (
            <div style={{ background: this.state.bgColor }}>
                <h1 style={{ color: this.state.fontColor }}>
                    Change my color
                </h1>
                <button onClick={ this.changeBgColor }>
                    Change Background Color
                </button>
                <button onClick={ this.changeFontColor }>
                    Change Font Color
                </button>
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
    <BgColor />,
    document.getElementById('root')
);