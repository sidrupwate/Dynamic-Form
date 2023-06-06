import React, { Component } from "react";
import Form from "../components/form";

class FormContainer extends Component {
    constructor() {
        super()

        this.state = {
            form: {
                username: '',
                email: '',
                password: '',
                age: ''
            }
        }
    }

    handleChange = (e, name) => {
        // console.log(e, key);
        let { form } = this.state;
        form[name] = e.target.value;
        this.setState({ form });
        // console.log(form);
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let { form } = this.state;
        console.log(form);
    };



    render() {

        const ageOption = [
            { name: 'Ten', value: 10 },
            { name: 'Twenty', value: 20 },
            { name: 'Thirty', value: 30 },
            { name: 'Forty', value: 40 },
            { name: 'Fifty', value: 50 },
        ]
        const formArray = [
            {
                label: "Username",
                name: 'username',
                type: 'textfield',
                value: this.state.form.username,
                handleChange: this.handleChange
            },
            {
                label: "Email",
                name: 'email',
                type: 'textfield',
                value: this.state.form.email,
                handleChange: this.handleChange
            },
            {
                label: "Password",
                name: 'password',
                type: 'textfield',
                value: this.state.form.password,
                handleChange: this.handleChange
            },
            {
                label: "Age",
                value: this.state.form.age,
                type: "select",
                fieldoption: ageOption,
                handleChange: this.handleChange
            }
        ]


        const { form } = this.state;
        // console.log(form);
        return (
            <div>
                <Form formData={form} formArray={formArray} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>


        )
    }
}

export default FormContainer;