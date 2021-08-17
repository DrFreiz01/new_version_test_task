import React from 'react';
import {getGroupsUsers} from './utils/utils';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            groupsUsers: []
        };
    }

    componentDidMount() {
        fetch("https://api.randomuser.me/?results=10" +
            "")
            .then(res => res.json())
            .then(
                (payload) => {
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
        const {error, isLoaded} = this.state;

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
            <div>

            </div>
        );
    }
}
