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
            groupsUsers: null
        };
    }

    componentDidMount() {
        fetch("https://api.randomuser.me/?results=10" +
            "")
            .then(res => res.json())
            .then(
                (payload) => {
                    console.log(payload.results)
                    this.setState({
                        isLoaded: true,
                        groupsUsers: getGroupsUsers(payload.results)
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
        const {error, isLoaded, groupsUsers} = this.state;

        console.log(groupsUsers)

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
                    <UsersList groupsUsers={groupsUsers} />
                    <FavoritesUsersList />
                </div>
            </div>
        );
    }
}
