import React, { Component } from 'react';
import Counters from './components/counters';
import Movies from './components/movies';
import NavBar from './components/navbar';


class App extends Component {
    state = {
        counters: [
          { id: 1, value: 4 },
          { id: 2, value: 0 },
          { id: 3, value: 0 },
          { id: 4, value: 0 },
        ],
      };

      constructor(props){
          super(props);
          console.log('App-Constructor');
          this.sate = this.props.something;
      }

      componentDidMount(prevProps, prevState){
          console.log('App-Mounted');
          //if (prevProps.counters.value !== this.props.counters.value){
              // Alax call to will not happem if things are the same
          //}
      }

      componentWillUnmount(){

      }
    
      handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
      };

      handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value--;
        this.setState({ counters });
      };
    
      handleReset = () => {
        const counters = this.state.counters.map((c) => {
          c.value = 0;
          return c;
        });
        this.setState({ counters: counters });
      };
    
      handleDelete = (counterId) => {
        const counters = this.state.counters.filter((c) => c.id !== counterId);
        this.setState({ counters });
      };

    render() { 
        console.log('App-Render');
        return ( 
            <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length}/>
            <main className="container">
                <Counters
                counters={this.state.counters}
                onReset={this.handleReset}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
                />
                <Movies/>
            </main>
            </React.Fragment>
         );
    }
}
 
export default App;