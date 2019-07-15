import React,{ Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Banner from '@/components/banner/Banner';
import Search from '@/components/search/Search';
import SideNav from '@/components/sideNav/SideNav';
import Friends from '@/pages/friends/Friends';
import Video from '@/pages/video/Video';
import Find from '@/pages/find/Find';
import My from '@/pages/my/My';

export default class App extends Component {
  

  render(){
    return (
      <Router>
        <Switch>
            <Route exact path = '/' component = {Find} />
            <Route path = '/sideNav' component = {SideNav} />
            <Route path = '/search' component = {Search} />
            <Route path = '/banner' component = {Banner} />
            <Route path = '/friends' component = {Friends} />
            <Route path = '/my' component = {My} />
            <Route path = '/video' component = {Video} />
        </Switch>
      </Router>
    );
  }
}
