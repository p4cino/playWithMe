import React from 'react';

import API from "../../api";

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profiles: [],
            isLoading: true,
        };
    }

    getData = async () => {
        await API.get(`profiles`, {
            params: {
                // limit: this.state.limit,
            }
        })
            .then(response => {
                this.setState({
                    profiles: response.data,
                    isLoading: false
                });
                console.log(response.data);
            })
            .catch(error => {
                console.log('Woops', error);
            });
    };

    componentDidMount() {
        this.getData();
    }

    render() {
        const {profiles} = this.state;

        return (
            <div>
                {profiles.map((profile) => {
                    return (
                        <ul>
                            <li>
                                {profile.id}
                            </li>
                            <li>
                                {profile.login}
                            </li>
                            <li>
                                {profile.email}
                            </li>
                            <li>
                                {profile.preferences.localization.name}
                            </li>
                        </ul>
                    )
                })}
            </div>
        );
    }
}

export default Splash;
