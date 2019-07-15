import React, { Component } from 'react';
import axios from 'axios';
import GlobalNav from '@/components/globalNav/GlobalNav';
import { SearchBar } from 'antd-mobile';

export default class ToDo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            obj: [],
        }
    }

    componentDidMount() {
        this.getCity();
    }

    getCity() {
        axios.get("").then((res) => {
            // console.log(res.data)
            if (res.statusText === 'OK') {
                this.setState({
                    city: res.data.city
                })
            }
        })
    }
    render() {
        return (
            <div>
                <GlobalNav />
                <SearchBar placeholder="Search" maxLength={8} />
                friends
            </div>
        );
    }
}