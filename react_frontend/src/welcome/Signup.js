import React, { Component } from 'react';

class Signup extends Component{
    state = {
        loggedIn: false,
        user: {
            user_name: '',
            password: '',
            email: ''
        }
    }

    handleUsernameInput = (e) => {
        // console.log("username: " + e.target.value)
        this.setState({
            user: {
                user_name: e.target.value,
                password: this.state.user.password,
                email: this.state.user.email
            }
        })
    }

    handleEmailInput = (e) => {
        // console.log("Email: " + e.target.value)
        this.setState({
            user: {
                user_name: this.state.user.user_name,
                password: this.state.user.password,
                email: e.target.value
            }
        })
    }

    handlePasswordInput = (e) => {
        // console.log("Password: " + e.target.value)
        this.setState({
            user: {
                user_name: this.state.user.user_name,
                password: e.target.value,
                email: this.state.user.email
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.handleCreateUser({...this.state.user})
    }


    render() {
        return(
            <div>
                <h1>Welcome to Three Seeds Tarot App</h1>


                <form onSubmit={this.handleSubmit}> 
                    <label>
                        Username:
                    </label>
                    <input type="text" name="user_name" placeholder="username" onChange={this.handleUsernameInput}/>

                    <label> 
                        Email: 
                    </label>
                    <input type="text" name="email" placeholder="email" onChange={this.handleEmailInput}/>
                    
                    <label>
                        Password:
                    </label>
                    <input type ="password" name="password" placeholder="password" onChange={this.handlePasswordInput}/>

                    <button type='submit' name="Submit"/>
                </form>
            </div>
    )}
}