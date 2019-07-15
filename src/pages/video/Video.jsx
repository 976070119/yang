import React, { Component } from 'react';
import axios from 'axios';
import GlobalNav from '@/components/globalNav/GlobalNav';

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
                video
                {/* <button onClick={() => this.adress()}>确定</button>({this.state.city})
                <div>本周热播</div>
                {
                    this.state.obj.map((item, key) => {
                        return (
                            <div key={key}>
                                <div>{key + 1}.  {item.title}</div>
                            </div>
                        )
                    })
                } */}
            </div>
        );
    }
}