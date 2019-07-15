import React, { Component } from 'react';
import axios from 'axios';
import './banner.scss';
import { Carousel, WingBlank } from 'antd-mobile';

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
        let data = this.state.banner
        return (
            <WingBlank>
                <Carousel
                autoplay={true}
                infinite
                dotActiveStyle={{width: '10px', height: '10px', background: 'rgba(255,50,50,.8)'}}
                dotStyle={{width: '10px', height: '10px', background: 'rgba(200,200,200,.8)'}}
                >
                {
                    data.map((item, key)=>{
                        return(
                            <a className="url" href={item.url} key={key}>
                                <img className="img" src={item.pic} alt=''/>
                                <span style={{background: item.titleColor}} className="tag">{item.typeTitle}</span>
                            </a>
                        )
                    })
                }
                </Carousel>
            </WingBlank>
        );
    }
}
