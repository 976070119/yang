import React, { Component } from 'react';
import axios from 'axios';
import './search.scss';

export default class Banner extends Component {
    constructor(props) {
        super(props)
        this.state={
            banner: []
        }
    }
    componentDidMount() {
        axios.get('http://www.yang1995.club:3000/banner?type=1').then((res)=>{
            this.setState({
                banner: res.data.banners
            })
        })
    }
    
    render() {
        // let data = this.state.banner
        return (
            <div>111</div>
        );
    }
}
