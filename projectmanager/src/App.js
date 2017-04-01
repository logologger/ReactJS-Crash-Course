import React, { Component } from 'react';
import uuid from 'uuid';
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
                    id:uuid.v4(),
                    title: 'Business WEbsite',
                    category: 'Web Design'
                }, {
                    id:uuid.v4(),
                    title: 'Business WEbsite j',
                    category: 'Web Design'
                }, {
                    id:uuid.v4(),
                    title: 'Business WEbbsite',
                    category: 'Web Desnmign'
                }, {
                    id:uuid.v4(),
                    title: 'Business WEbsjite',
                    category: 'Web Desbnign'
                }

            ]
        })


    }
    handleAddProject(project){

        let projects=this.state.projects;
        projects.push(project);
        this.setState({projects:projects});

    }
    handleDeleteProject(id){
         let projects=this.state.projects;
         let index=projects.findIndex(x=> x.id===id);
         projects.splice(index,1);
         this.setState({projects:projects});

    }
    render() {
        return ( <div className="App">

            <AddProject addProject={this.handleAddProject.bind(this)}/>

            <Projects projects={ this.state.projects } onDelete={this.handleDeleteProject.bind(this)}
            /> </div>
        );
    }
}

export default App;
