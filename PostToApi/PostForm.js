import React, { Component } from 'react'

export class PostForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            id: '',
            title: '',
            body: '',
        }
    }

    chageHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    post = e => {
        e.preventDefault()
        // it should returns 201 don't worry
        fetch('https://jsonplaceholder.typicode.com/posts/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(res => console.log(res))
            .catch(error => console.error(error))
        console.log(this.state)
    }

    render() {
        return (
            <div><br />
                <form>
                    <input type='number' placeholder='userId' name='userId' onChange={this.chageHandler} /><br />
                    <input type='number' placeholder='id' name='id' onChange={this.chageHandler} /><br />
                    <input type='text' placeholder='title' name='title' onChange={this.chageHandler} /><br />
                    <textarea placeholder='body' name='body' onChange={this.chageHandler} /><br />
                    <input type='submit' onClick={this.post} />
                </form>
            </div>
        )
    }
}

export default PostForm
