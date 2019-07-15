import React from 'react';
import './globalNav.scss';
import { NavLink } from 'react-router-dom';

const NavBar = () =>(
  <div className='box'>
    <NavLink className='item' to='/my' replace>我的</NavLink>
    <NavLink className='item' exact to='/' replace>发现</NavLink>
    <NavLink className='item' to='/friends' replace>朋友</NavLink>
    <NavLink className='item' to='/video' replace>视频</NavLink>
  </div>
  )
  export default NavBar;