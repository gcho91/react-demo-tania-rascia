import React, { Component } from 'react';
import { list } from 'postcss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("INITIAL STATE", this.state)
        const url ='https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*';
        // const url = `http://jsonplaceholder.typicode.com/users`;

        fetch(url)
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({
                        data: result
                    })
                    console.log('updated state', this.state)
                })
    }

    render() {
        const { data } = this.state;
        console.log(data, "RENDER");

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        })

        return <ul>{result}</ul>
    }
}

export default App;