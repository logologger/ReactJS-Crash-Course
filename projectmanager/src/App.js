import React, { Component } from 'react';
import Projects from './components/projects';
import './App.css';

class App extends Component {

    constructor() {
      super();
        this.state = {
            projects: [{
                    title: 'Business WEbsite',
                    category: 'Web Design'
                },
                {
                    title: 'Business WEbsite j',
                    category: 'Web Design'
                },
                {
                    title: 'Business WEbbsite',
                    category: 'Web Desnmign'
                },
                {
                    title: 'Business WEbsjite',
                    category: 'Web Desbnign'
                }

            ]
        }
    }
    render() {
        return ( < div className="App" >
            My App <Projects projects={this.state.projects}/ >
            </div>
        );
    }
}

export default App;
