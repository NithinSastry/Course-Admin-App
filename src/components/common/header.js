import React from 'react';
import { Link, IndexLink } from 'react-router';
import Loading from './loading';

const Header = () => {
    return (
        <nav>
            <IndexLink to="/" activeClassName="active" >Home</IndexLink>
            {"|"}
            <Link to="/courses" activeClassName="active">Courses</Link>
            {"|"}
            <Link to="/about" activeClassName="active">About</Link>
            {"|"}
            <Loading />
        </nav>
    );
};

export default Header;