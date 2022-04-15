import React from 'react'
import { Link } from 'react-router-dom';

export class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = { users: [] };
    }

    async componentDidMount() {
        var response = await fetch("https://reqres.in/api/users?page=2");
        var jsonObj = await response.json();
        this.setState({users: jsonObj.data});
    }

    render() {
        return (
            <React.Fragment>
                <h1>Users List</h1>
                <h3>List of users</h3>
                <ul>
                    {this.state.users.map((user, index) => {
                        return (
                            <>
                            <li key={user.id}>{user.first_name} {user.last_name}</li><br/>
                                <Link to={"/users/details/" + user.id}>Details</Link>
                                <button onClick={() => this.removeUser(index)}>Remove</button>
                            </>
                        )
                    })}
                </ul>             
                <br/>
                <button onClick={() => this.addUser()}>Add user</button>
            </React.Fragment>
        )
    }

    removeUser(index) {
        var users = this.state.users;
        users.splice(index, 1);
        this.setState({ users: users})
    }
}