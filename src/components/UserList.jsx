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
                <table class="table table-hover">
                <thead>
                    <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.users.map((user, index) => {
                        return (
                            <>
                            <tr>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>    
                                    <Link to={"/users/details/" + user.id}>Details</Link>
                                    <button onClick={() => this.removeUser(index)}>Remove</button>
                                </td>
                            </tr>
                            </>
                        )
                    })}
                
                </tbody>
                </table>           
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