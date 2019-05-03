import React, { Component, PureComponent } from 'react';

class Course extends PureComponent {

    constructor (){
        super();
        this.state = {
            title : null
        }
    }
    componentDidMount () {
        this.updateComponentWhenParamsChanged();
    }

    componentDidUpdate () {
        this.updateComponentWhenParamsChanged();
    }

    updateComponentWhenParamsChanged () {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            console.log(param); // yields ['start', '5']
            // if (param[1] != this.state.title ) { //no need to have this when using pure component
                this.setState({ title : param[1] });
            // } 
        }
        console.log(this.state);
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;