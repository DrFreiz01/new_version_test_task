import React from 'react';
import {getGroupsUsers} from './utils/utils';
import UsersList from './Components/UsersList';
import Search from './Components/Search';
import FavoritesUsersList from "./Components/FavoritesUsersList";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            payloadUsersGroups: null,
            usersGroups: null
        };
    }

    componentDidMount() {
        fetch("https://api.randomuser.me/?results=10" +
            "")
            .then(res => res.json())
            .then(
                (payload) => {
                    console.log(payload.results)
                    const  allUsersListInGroups = getGroupsUsers(payload.results)
                    this.setState({
                        isLoaded: true,
                        payloadUsersGroups: allUsersListInGroups,
                        usersGroups: allUsersListInGroups
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, usersGroups} = this.state;
        console.log(usersGroups)
        if (error) {
            return <div>Ошибка: {error.message}</div>;
        }

        if (!isLoaded) {
            return (
                <div className="d-flex justify-content-center align-items-center w-100 vh-100">
                    <div className="spinner-grow" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )
        }
        return (
            <div className='main'>
                <Search />
                <div className='main__lists'>
                    <UsersList usersGroups={usersGroups} />
                    <FavoritesUsersList />
                </div>
            </div>
        );
    }
}
