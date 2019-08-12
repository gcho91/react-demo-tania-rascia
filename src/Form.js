import React from 'react';

class Form extends React.Component {
    //you need constructor to use 'this'
    constructor(props) {
        super(props);
        this.initialState = {
            name: '',
            job: ''
        };
        this.state = this.initialState;

    };
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        })
    };
    submitForm = (event) => {
        console.log("handle submit form", this.state);
        this.props.handleSubmit(this.state);
        //clear form, reset state
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;
        console.log(name, job);

        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange} />
                <label>Job</label>
                <input
                    type="text"
                    name="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;
