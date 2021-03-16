import React, { Component } from 'react';
import Counter from './components/counter';
import Movies from './components/movies';


class App extends Component {
    render() { 
        return ( 
            <main className="container">
                <Movies/>
                <Counter/>
            </main>
         );
    }
}
 
export default App;