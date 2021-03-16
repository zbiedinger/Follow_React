import React, { Component } from 'react';
import Counters from './components/counters';
import Movies from './components/movies';


class App extends Component {
    render() { 
        return ( 
            <main className="container">
                <Movies/>
                <Counters/>
            </main>
         );
    }
}
 
export default App;