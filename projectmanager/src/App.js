import React, { Component } from 'react';
import Projects from './components/projects';
import AddProject from './components/AddProject';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {

        this.setState({
            projects: [

                {
                    title: 'Business WEbsite',
                    category: 'Web Design'
                }, {
                    title: 'Business WEbsite j',
                    category: 'Web Design'
                }, {
                    title: 'Business WEbbsite',
                    category: 'Web Desnmign'
                }, {
                    title: 'Business WEbsjite',
                    category: 'Web Desbnign'
                }

            ]
        })


    }
    render() {
        return ( < div className = "App" >

            < AddProject / >

            < Projects projects = { this.state.projects }
            / > </div >
        );
    }
}

export default App;
