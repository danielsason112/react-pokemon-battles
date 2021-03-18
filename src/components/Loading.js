import { Component } from 'react';
import logo from './logo.svg';
import './Loading.css';

class Loading extends Component {
    render() {
        return <div className='Loading'>
            <img src={logo} alt='Loading...' />
        </div>
    }
}

export default Loading;